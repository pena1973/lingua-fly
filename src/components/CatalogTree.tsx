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
    
    return (
        <div className="catalog">
            <div className="catalogTitle">{t("catalog_title")}</div>
            {lib.sections.map((sec) => (
                <details key={sec.id} open>
                    <summary className="sectionTitle">{sec.title_native}</summary>
                    <ul className="textList">
                        {sec.texts.map((txt) => (
                            <li key={txt.id}>
                                <button
                                    className={`textBtn ${selectedTextId === txt.id ? "active" : ""}`}
                                    onClick={() => onSelect(txt)}
                                >
                                    {txt.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            ))}
        </div>
    );
};