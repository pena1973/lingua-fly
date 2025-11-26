
// Что делает этот эндпойнт:

// на сервере Next.js ходит в https://api.cloudflare.com/client/v4/graphql

// забирает httpRequests1dGroups за последние 30 дней

// суммирует:

// pageViews → сколько раз страницы реально загружались

// uniques → приблизительные уникальные посетители

// отдаёт JSON вида:

// {
//   "pageViews": 1234,
//   "uniquesApprox": 321,
//   "days": 30,
//   "range": { "from": "2025-10-27", "to": "2025-11-26" }
// }

import { NextResponse } from "next/server";

const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ZONE_ID = process.env.CF_ZONE_ID;

if (!CF_API_TOKEN || !CF_ZONE_ID) {
  console.warn(
    "[CF_VISITS] Missing CF_API_TOKEN or CF_ZONE_ID in environment variables"
  );
}

// Запросим суммарные pageViews и uniques за последние 30 дней
export async function GET() {
  if (!CF_API_TOKEN || !CF_ZONE_ID) {
    return NextResponse.json(
      { error: "Cloudflare env vars are not configured" },
      { status: 500 }
    );
  }

  try {
    const today = new Date();
    const endDate = today.toISOString().slice(0, 10); // YYYY-MM-DD

    const start = new Date(today);
    start.setDate(start.getDate() - 30);
    const startDate = start.toISOString().slice(0, 10); // YYYY-MM-DD

    const query = `
      query GetZoneAnalytics($zoneTag: string, $date_geq: string, $date_lt: string) {
        viewer {
          zones(filter: { zoneTag: $zoneTag }) {
            httpRequests1dGroups(
              limit: 1000,
              filter: { date_geq: $date_geq, date_lt: $date_lt }
            ) {
              sum {
                pageViews
              }
              uniq {
                uniques
              }
            }
          }
        }
      }
    `;

    const payload = {
      query,
      variables: {
        zoneTag: CF_ZONE_ID,
        date_geq: startDate,
        date_lt: endDate,
      },
    };

    const resp = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CF_API_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("[CF_VISITS] CF API error:", resp.status, text);
      return NextResponse.json(
        { error: "Cloudflare API error", status: resp.status },
        { status: 502 }
      );
    }

    const data = await resp.json();

    // Немного безопасного парсинга структуры
    const groups =
      data?.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];

    let totalPageViews = 0;
    let totalUniquesApprox = 0;

    for (const g of groups) {
      const pv = g?.sum?.pageViews ?? 0;
      const u = g?.uniq?.uniques ?? 0;
      totalPageViews += pv;
      // uniques по дням не строго суммируются как "уникальные за период",
      // но для "красивой циферки" можно использовать как приближение
      totalUniquesApprox += u;
    }

    return NextResponse.json({
      pageViews: totalPageViews,
      uniquesApprox: totalUniquesApprox,
      days: groups.length,
      range: { from: startDate, to: endDate },
    });
  } catch (err) {
    console.error("[CF_VISITS] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal error while fetching Cloudflare data" },
      { status: 500 }
    );
  }
}
