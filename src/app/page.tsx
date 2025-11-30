
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { CatalogTree } from "@/components/CatalogTree";
import { DualText } from "@/components/DualText";
import { WordList } from "@/components/WordList";
import { LearnBoard } from "@/components/LearnBoard";
import { useLang } from "@/context/LanguageContext";

import {
  libraryPTRU,
  libraryPTEN,
  libraryENRU,
  // libraryENEN,
  TextItem
} from "@/data/library";



// где-нибудь рядом с centerPane
const RuleBlock: React.FC<{ rule: string }> = ({ rule }) => {
  return (
    <div className="ruleBlock">
      {rule
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line, idx) => {
          const [label, rest] = line.split(":");
          return (
            <div key={idx} className="ruleLine">
              <strong>{label.trim()}:</strong>
              <span> {rest?.trim()}</span>
            </div>
          );
        })}
    </div>
  );
};

/**
 * Карта библиотек по паре:
 *  - ключ 1: изучаемый язык (learningLang)
 *  - ключ 2: язык интерфейса / родной язык (uiLang)
 *
 * Пока у нас есть только libraryPT и libraryEN,
 * привяжем их к комбинациям, а позже можно будет
 * заменить нужные пары на свои (например, libraryENRU, libraryENEN и т.п.).
 */
const LIBS_BY_LANG_PAIR = {
  pt: {
    ru: libraryPTRU, // учим PT, интерфейс RU
    en: libraryPTEN, // учим PT, интерфейс EN (пока та же библиотека)
  },
  en: {
    ru: libraryENRU, // учим EN, интерфейс RU
    // en: libraryENEN, // учим EN, интерфейс EN (пока та же библиотека)
  },
} as const;

export default function HomePage() {
  const { learningLang, uiLang, t } = useLang();

  const lib = useMemo(() => {
    const byUi = LIBS_BY_LANG_PAIR[learningLang as keyof typeof LIBS_BY_LANG_PAIR];
    const selected =
      byUi?.[uiLang as keyof typeof byUi] ??
      (byUi && (Object.values(byUi)[0] as (typeof libraryPTRU))) ??
      libraryPTRU;

    return selected;
  }, [learningLang, uiLang]);


  const [selectedText, setSelectedText] = useState<TextItem | null>(
    lib.sections[0].texts[0]
  );
  const [mode, setMode] = useState<"read" | "learn">("read");

  // состояние мобильного каталога
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // когда меняется библиотека (язык изучения) — выбираем первый текст и выходим в режим чтения
  useEffect(() => {
    const first = lib.sections[0]?.texts[0] ?? null;
    setSelectedText(first);
    setMode("read");
    setIsCatalogOpen(false);
  }, [lib]);

  const content = useMemo(() => selectedText, [selectedText]);

  return (
    <div className="container">
      <div className="readerLayout">
        {/* Мобильный бар с гамбургером */}
        <div className="mobileTopBar">
          <button
            type="button"
            className={`hamburgerBtn ${isCatalogOpen ? "open" : ""}`}
            onClick={() => setIsCatalogOpen((v) => !v)}
          >
            <span className="hamburgerIcon" />
            <span className="hamburgerLabel">{t("catalog_title")}</span>
          </button>
        </div>

        {/* Затемнение под выпадающей панелью (только на мобилке видно через CSS) */}
        {isCatalogOpen && (
          <div
            className="catalogOverlay"
            onClick={() => setIsCatalogOpen(false)}
          />
        )}

        <div className="page">
          <div
            className={
              "leftPane leftPane-mobile " + (isCatalogOpen ? "open" : "")
            }
          >
            <CatalogTree
              lib={lib}
              selectedTextId={selectedText?.id}
              onSelect={(t) => {
                setSelectedText(t);
                setMode("read");
                setIsCatalogOpen(false);
              }}
            />
          </div>

          <div className="centerPane">
            {mode === "read" && content && (
              <>
                {content.rule && (
                  <div className="ruleBox">
                    <RuleBlock rule={content.rule} />
                    {/* {content.rule} */}
                  </div>
                )}

                <h2 className="blockTitle">
                  {content.title_target} / {content.title_native}
                </h2>

                <DualText pairs={content.sentences} />
                <div className="spacer" />
                <WordList
                  words={content.words}
                  onLearn={() => setMode("learn")}
                />
              </>
            )}

            {mode === "learn" && content && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <h2 className="blockTitle" style={{ margin: 0 }}>
                    Practice
                  </h2>
                  <button
                    className="pill"
                    onClick={() => {
                      setMode("read");
                    }}
                  >
                    Вернуться
                  </button>
                </div>
                <LearnBoard words={content.words} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


