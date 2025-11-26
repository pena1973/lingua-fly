"use client";

import React, { useEffect, useState } from "react";

type CfVisits = {
  pageViews: number;
  uniquesApprox: number;
  days: number;
  range: { from: string; to: string };
};

export default function VisitCounterFooter() {
  const [visits, setVisits] = useState<CfVisits | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/cf-visits")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data: CfVisits) => {
        setVisits(data);
      })
      .catch((e) => {
        console.error("Error fetching /api/cf-visits:", e);
        setError("нет данных");
      });
  }, []);

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <span>© {new Date().getFullYear()} LinguaFly</span>

        <span className="siteFooterVisits">
          По данным Cloudflare за последние{" "}
          {visits?.days ?? "…"} дней сюда заглянули{" "}
          <span className="siteFooterCounter">
            {error
              ? error
              : visits
              ? visits.uniquesApprox.toLocaleString("ru-RU")
              : "…"}
          </span>{" "}
          человек
        </span>
      </div>
    </footer>
  );
}
