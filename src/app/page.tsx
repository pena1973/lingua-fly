
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { CatalogTree } from "@/components/CatalogTree";
import { DualText } from "@/components/DualText";
import { WordList } from "@/components/WordList";
import { LearnBoard } from "@/components/LearnBoard";
import { libraryPT, libraryEN, TextItem } from "@/data/library";
import { useLang } from "@/context/LanguageContext";

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


// здесь будут все библиотеки по изучаемому языку
const LIBS_BY_LEARNING_LANG = {
  pt: libraryPT,
  // es: libraryES,
  en: libraryEN,
} as const;

export default function HomePage() {
  const { learningLang } = useLang();

  // выбираем библиотеку по изучаемому языку
  const lib = useMemo(
    () => LIBS_BY_LEARNING_LANG[learningLang] ?? libraryPT,
    [learningLang]
  );

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
            <span className="hamburgerLabel">Каталог</span>
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
