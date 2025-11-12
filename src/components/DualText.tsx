"use client";
import React from "react";
import { SentencePair } from "@/data/library";
import { useLang } from "@/context/LanguageContext";


export const DualText: React.FC<{ pairs: SentencePair[] }> = ({ pairs }) => {
    const { t, uiLang } = useLang();
    const leftTitle = uiLang === "ru" ? t("target") : t("native");
    const rightTitle = uiLang === "ru" ? t("native") : t("target");
    return (
        <div className="dual">
            <div className="dualHead">
                <div>{leftTitle}</div>
                <div>{rightTitle}</div>
            </div>
            {pairs.map((p, i) => (
                <div className="dualRow" key={i}>
                    <div className="dualCell">{p.target}</div>
                    <div className="dualCell">{p.native}</div>
                </div>
            ))}
        </div>
    );
};