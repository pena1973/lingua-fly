"use client";
import React from "react";
import { Library, Section, TextItem } from "@/data/library";
import { useLang } from "@/context/LanguageContext";


export const CatalogTree: React.FC<{
    lib: Library;
    selectedTextId?: string | null;
    onSelect: (text: TextItem) => void;
}> = ({ lib, onSelect, selectedTextId }) => {
    const { uiLang, t } = useLang();
    const pick = (s: Section) => (uiLang === "ru" ? s.title_native : s.title_target);
    const pickText = (x: TextItem) => (uiLang === "ru" ? x.title : x.title_target);


    return (
        <div className="catalog">
            <div className="catalogTitle">{t("catalog_title")}</div>
            {lib.sections.map((sec) => (
                <details key={sec.id} open>
                    <summary className="sectionTitle">{pick(sec)}</summary>
                    <ul className="textList">
                        {sec.texts.map((txt) => (
                            <li key={txt.id}>
                                <button
                                    className={`textBtn ${selectedTextId === txt.id ? "active" : ""}`}
                                    onClick={() => onSelect(txt)}
                                >
                                    {pickText(txt)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            ))}
        </div>
    );
};