"use client";
import React from "react";
import { WordPair } from "@/data/library";
import { useLang } from "@/context/LanguageContext";


export const WordList: React.FC<{ words: WordPair[]; onLearn: () => void }> = ({ words, onLearn }) => {
    const { t } = useLang();
    return (
        <div>
            <div className="wordsTitle">{t("words_title")}</div>
            <div className="wordsTitle">
                <button className="primary" onClick={onLearn}>{t("learn_btn")}
                </button>
            </div>
            <div className="wordsGrid">
                {words.map((w) => (
                    <div className="wordItem" key={w.id}>
                        <div className="wNative">{w.native}</div>
                        <div className="wTarget">{w.target}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};