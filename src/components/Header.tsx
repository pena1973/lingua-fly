
"use client";
import Link from "next/link";
import LogoBird from "./LogoBird";
import { useLang } from "@/context/LanguageContext";
import React, { useState } from "react";

const LEARN_LANGS = [
  { value: "pt", label: "pt" },
  { value: "en", label: "en" },
];

const UI_LANGS = [
  { value: "ru", label: "ru" },
  { value: "en", label: "en" },
];

export default function Header() {
  const {learningLang: learnLang,setLearningLang, uiLang, setUiLang, t } = useLang();    
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isUiOpen, setIsUiOpen] = useState(false);

  return (
    <header className="header">
      <div className="headerRow">
        <Link href="/" className="brand">
          <LogoBird size={34} />
          <span className="brandTitle">LinguaFly</span>
        </Link>

        <div className="headerSpacer" />

        <nav className="navRight">
          {/* Изучаемый язык */}
          <div className="studyLangWrap">
            <span className="studyLangLabel">{t("learning_lang")}</span>

            <div
              className="pillDropdown"
              tabIndex={0}
              onBlur={() => setIsLearnOpen(false)}
            >
              <button
                type="button"
                className={`langSel pillDropdownBtn ${isLearnOpen ? "open" : ""
                  }`}
                onClick={() => setIsLearnOpen((v) => !v)}
              >
                {learnLang}
              </button>

              <ul
                className={`pillDropdownMenu ${isLearnOpen ? "open" : ""
                  }`}
              >
                {LEARN_LANGS.map((opt) => (
                  <li
                    key={opt.value}
                    className={
                      "pillDropdownItem" +
                      (opt.value === learnLang ? " active" : "")
                    }
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLearningLang(opt.value as "pt" | "en");
                      setIsLearnOpen(false);
                    }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Язык интерфейса – тот же стиль дропдауна */}
          <div className="langWrap">
            <div
              className="pillDropdown"
              tabIndex={0}
              onBlur={() => setIsUiOpen(false)}
            >
              <button
                type="button"
                className={`langSel pillDropdownBtn ${isUiOpen ? "open" : ""
                  }`}
                onClick={() => setIsUiOpen((v) => !v)}
              >
                {uiLang}
              </button>

              <ul
                className={`pillDropdownMenu ${isUiOpen ? "open" : ""
                  }`}
              >
                {UI_LANGS.map((opt) => (
                  <li
                    key={opt.value}
                    className={
                      "pillDropdownItem" +
                      (opt.value === uiLang ? " active" : "")
                    }
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setUiLang(opt.value as "ru" | "en");
                      setIsUiOpen(false);
                    }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
