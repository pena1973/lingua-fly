"use client";
import Link from "next/link";
import LogoBird from "./LogoBird";
import { useLang } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const { uiLang, setUiLang } = useLang();
  const router = useRouter();

  return (
    <header className="header">
      <div className="headerRow">
        <Link href="/" className="brand">
          <LogoBird size={34} />
          <span className="brandTitle">LinguaFly</span>
        </Link>

        <div className="headerSpacer" />

        <nav className="navRight">
          {/* <Link className="pill" href="/profile">Профиль</Link> */}

          <div className="langWrap">
            <select
              className="langSel"
              aria-label="UI language"
              value={uiLang}
              onChange={(e) => setUiLang(e.target.value as "ru"|"en")}
            >
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
          </div>

          {/* <button
            className="pill"
            onClick={() => { alert("logout"); router.push("/"); }}
          >
            Выйти
          </button> */}
        </nav>
      </div>
    </header>
  );
}
