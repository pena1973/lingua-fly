"use client";

import React, { useEffect, useState } from "react";

const COUNTER_KEY = "lingua-fly.com/root"; // можешь переименовать под себя

export default function VisitCounterFooter() {
    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
        // простой внешний счётчик без БД
        fetch(
            `https://api.countapi.xyz/hit/${encodeURIComponent(COUNTER_KEY)}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (typeof data?.value === "number") {
                    setValue(data.value);
                }
            })
            .catch(() => {
                setValue(null);
            });
    }, []);

    return (
        <footer className="siteFooter">
            <div className="siteFooterInner">
                <span>© {new Date().getFullYear()} LinguaFly</span>
                <span className="siteFooterVisits">
                    Эту страницу уже посмотрели{" "}
                    <span className="siteFooterCounter">
                        {value === null ? "…" : value}
                    </span>{" "}
                    раз
                </span>
            </div>
        </footer>
    );
}
