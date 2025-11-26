"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type CfVisits = {
  pageViews: number;
  uniquesApprox: number;
  days: number;
  range: { from: string; to: string };
};

export default function Footer() {
  const year = new Date().getFullYear();
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
        setError("no data");
      });
  }, []);

  const counterText =
    error != null
      ? error
      : visits
      ? visits.uniquesApprox.toLocaleString("en-US")
      : "…";

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        {/* ЦЕНТРАЛЬНАЯ строка со счётчиком */}
        <div className="siteFooterCounterLine">
          Visitors in the last{" "}
          {visits?.days ?? "…"} days:{" "}
          <span className="siteFooterCounter">{counterText}</span>
        </div>

        {/* Навигация по правовым страницам */}
        <nav className="siteFooterNav">
          <Link href="/legal" className="siteFooterLink">
            Legal
          </Link>
          <Link href="/privacy" className="siteFooterLink">
            Privacy
          </Link>
          <Link href="/ai" className="siteFooterLink">
            AI Disclosure
          </Link>
        </nav>

        {/* Подпись бренда */}
        <span className="siteFooterBrand">
          © {year} LinguaFly · Rino Labs
        </span>
      </div>
    </footer>
  );
}
