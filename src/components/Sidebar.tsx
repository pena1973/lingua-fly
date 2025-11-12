"use client";
import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";


export const Sidebar: React.FC = () => {
    const { uiLang, setUiLang, t } = useLang();
    return (
        <aside className="sidebar">
            <div className="brand">
                <span className="bird">🕊️</span>
                <span className="title">{t("app_title")}</span>
            </div>
            <nav className="menu">
                <Link href="/profile" className="menuItem">{t("menu_profile")}</Link>
                <div className="menuItem row">
                    <span>{t("menu_language")}:</span>
                    <select
                        aria-label="UI language"
                        value={uiLang}
                        onChange={(e) => setUiLang(e.target.value as any)}
                    >
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <button className="menuItem ghost" onClick={() => alert("noop: logout")}>{t("menu_logout")}</button>
            </nav>
        </aside>
    );
};