"use client";
import React, { useMemo, useState } from "react";
import { CatalogTree } from "@/components/CatalogTree";
import { DualText } from "@/components/DualText";
import { WordList } from "@/components/WordList";
import { LearnBoard } from "@/components/LearnBoard";
import { demoLibraryPT, TextItem } from "@/data/library";

export default function HomePage() {
  const lib = demoLibraryPT;
  const [selectedText, setSelectedText] = useState<TextItem | null>(lib.sections[0].texts[0]);
  const [mode, setMode] = useState<"read" | "learn">("read");

  const content = useMemo(() => selectedText, [selectedText]);

  return (
    <div className="container">
      <div className="page">
        <div className="leftPane">
          <CatalogTree
            lib={lib}
            selectedTextId={selectedText?.id}
            onSelect={(t) => { setSelectedText(t); setMode("read"); }}
          />
        </div>

        <div className="centerPane">
          {mode === "read" && content && (
            <>
              <h2 className="blockTitle">{content.title_target} / {content.title_native}</h2>
              <DualText pairs={content.sentences} />
              <div className="spacer" />
              <WordList words={content.words} onLearn={() => setMode("learn")} />
            </>
          )}

          {mode === "learn" && content && (
            <>
              <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:12}}>
                <h2 className="blockTitle" style={{margin:0}}>Practice</h2>
                <button className="pill" onClick={() => setMode("read")}>Вернуться</button>
              </div>
              <LearnBoard words={content.words} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
