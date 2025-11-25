"use client";
import React from "react";
import { SentencePair } from "@/data/library";
import { useLang } from "@/context/LanguageContext";


export const DualText: React.FC<{ pairs: SentencePair[] }> = ({ pairs }) => {
    const { t, uiLang } = useLang();
 
    return (
        <div className="dual">
            <div className="dualHead">
                <div>{t("target")}</div>
                <div>{t("native")}</div>
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