
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

// app/api/cf-visits/route.ts
import { NextResponse } from "next/server";

const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ZONE_ID = process.env.CF_ZONE_ID;

// сколько дней считаем (можешь поставить 1, если хочешь "как в дашборде за 24ч")
const DAYS = 30;

export async function GET() {
  if (!CF_API_TOKEN || !CF_ZONE_ID) {
    console.warn("[CF_VISITS] Missing CF_API_TOKEN or CF_ZONE_ID");
    return NextResponse.json(
      {
        pageViews: 0,
        uniquesApprox: 0,
        days: 0,
        range: { from: null, to: null },
      },
      { status: 200 }
    );
  }

  // берём дату (UTC) и отматываем N дней назад
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - DAYS);

  const startStr = start.toISOString().slice(0, 10); // YYYY-MM-DD

  const query = `
  {
    viewer {
      zones(filter: { zoneTag: "${CF_ZONE_ID}" }) {
        httpRequests1dGroups(
          limit: ${DAYS}
          orderBy: [date_ASC]
          filter: { date_geq: "${startStr}" }
        ) {
          dimensions { date }
          sum { pageViews }
          uniq { uniques }
        }
      }
    }
  }`;

  try {
    const resp = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    const json = await resp.json();

    if (!resp.ok || json.errors) {
      console.error("[CF_VISITS] GraphQL error", {
        status: resp.status,
        errors: json.errors,
      });
      return NextResponse.json(
        {
          pageViews: 0,
          uniquesApprox: 0,
          days: 0,
          range: { from: null, to: null },
        },
        { status: 200 }
      );
    }

    const groups =
      json?.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];

    const totalPageViews = groups.reduce(
      (acc: number, g: any) => acc + (g.sum?.pageViews ?? 0),
      0
    );
    const totalUniques = groups.reduce(
      (acc: number, g: any) => acc + (g.uniq?.uniques ?? 0),
      0
    );

    const days = groups.length;
    const from = groups[0]?.dimensions?.date ?? null;
    const to =
      groups.length > 0
        ? groups[groups.length - 1]?.dimensions?.date ?? null
        : null;

    return NextResponse.json({
      pageViews: totalPageViews,
      uniquesApprox: totalUniques,
      days,
      range: { from, to },
    });
  } catch (e) {
    console.error("[CF_VISITS] Request failed", e);
    return NextResponse.json(
      {
        pageViews: 0,
        uniquesApprox: 0,
        days: 0,
        range: { from: null, to: null },
      },
      { status: 200 }
    );
  }
}
