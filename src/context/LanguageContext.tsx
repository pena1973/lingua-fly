"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";


type UiLang = "ru" | "en";


type Dict = Record<string, Record<UiLang, string>>;


const dict: Dict = {
app_title: { ru: "LinguaFly", en: "LinguaFly" },
menu_profile: { ru: "Профиль", en: "Profile" },
menu_language: { ru: "Язык", en: "Language" },
menu_logout: { ru: "Выход", en: "Logout" },
catalog_title: { ru: "Каталог", en: "Catalog" },
learn_btn: { ru: "Учить", en: "Study" },
words_title: { ru: "Слова из текста", en: "Words from the text" },
choose_learning_lang: { ru: "Язык библиотеки (учим)", en: "Library language (learning)" },
save: { ru: "Сохранить", en: "Save" },
paired_texts: { ru: "Сопоставленные тексты", en: "Aligned texts" },
native: { ru: "Родной", en: "Native" },
target: { ru: "Изучаемый", en: "Target" },
match_help: { ru: "Перетащи карточку сверху к соответствующему слову снизу", en: "Drag a card from the top to a matching word below" },
reset: { ru: "Сброс", en: "Reset" },
};


function detectInitialLang(): UiLang {
if (typeof window === "undefined") return "ru";
const saved = localStorage.getItem("uiLang");
if (saved === "ru" || saved === "en") return saved;
const nav = navigator.language?.toLowerCase() || "en";
return nav.startsWith("ru") ? "ru" : "en";
}


export const LanguageContext = createContext<{
uiLang: UiLang;
setUiLang: (v: UiLang) => void;
t: (key: keyof typeof dict) => string;
}>({ uiLang: "ru", setUiLang: () => {}, t: (k) => dict[k].ru });


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [uiLang, setUiLangState] = useState<UiLang>("ru");


useEffect(() => { setUiLangState(detectInitialLang()); }, []);


const setUiLang = (v: UiLang) => {
setUiLangState(v);
if (typeof window !== "undefined") localStorage.setItem("uiLang", v);
};


const t = (key: keyof typeof dict) => dict[key][uiLang];


const value = useMemo(() => ({ uiLang, setUiLang, t }), [uiLang]);
return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};


export const useLang = () => useContext(LanguageContext);