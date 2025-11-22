"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";


type UiLang = "ru" | "en";
// 🔹 язык библиотеки (изучаемый язык)
// при необходимости просто добавишь сюда новые коды
type LearningLang = "pt" | "en";


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
    learning_lang: { ru: "Изучаемый язык", en: "Learning language" },
};


function detectInitialLang(): UiLang {
    if (typeof window === "undefined") return "ru";
    const saved = localStorage.getItem("uiLang");
    if (saved === "ru" || saved === "en") return saved;
    const nav = navigator.language?.toLowerCase() || "en";
    return nav.startsWith("ru") ? "ru" : "en";
}

// 🔹 отдельное определение стартового языка библиотеки
function detectInitialLearningLang(): LearningLang {
    if (typeof window === "undefined") return "pt";
    const saved = localStorage.getItem("learningLang");
    if (saved === "pt" || saved === "en") return saved;
    return "pt"; // по умолчанию учим португальский
}

// export const LanguageContext = createContext<{
//     uiLang: UiLang;
//     setUiLang: (v: UiLang) => void;
//     t: (key: keyof typeof dict) => string;
// }>({ uiLang: "ru", setUiLang: () => { }, t: (k) => dict[k].ru });


// export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [uiLang, setUiLangState] = useState<UiLang>("ru");


//     useEffect(() => { setUiLangState(detectInitialLang()); }, []);


//     const setUiLang = (v: UiLang) => {
//         setUiLangState(v);
//         if (typeof window !== "undefined") localStorage.setItem("uiLang", v);
//     };


//     const t = (key: keyof typeof dict) => dict[key][uiLang];


//     const value = useMemo(() => ({ uiLang, setUiLang, t }), [uiLang]);
//     return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };



export const LanguageContext = createContext<{
    uiLang: UiLang;
    setUiLang: (v: UiLang) => void;
    learningLang: LearningLang;
    setLearningLang: (v: LearningLang) => void;
    t: (key: keyof typeof dict) => string;
}>({
    uiLang: "ru",
    setUiLang: () => {},
    learningLang: "pt",
    setLearningLang: () => {},
    t: (k) => dict[k].ru,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [uiLang, setUiLangState] = useState<UiLang>("ru");
    const [learningLang, setLearningLangState] = useState<LearningLang>("pt");

    useEffect(() => {
        setUiLangState(detectInitialLang());
        setLearningLangState(detectInitialLearningLang());
    }, []);

    const setUiLang = (v: UiLang) => {
        setUiLangState(v);
        if (typeof window !== "undefined") localStorage.setItem("uiLang", v);
    };

    const setLearningLang = (v: LearningLang) => {
        setLearningLangState(v);
        if (typeof window !== "undefined") localStorage.setItem("learningLang", v);
    };

    const t = (key: keyof typeof dict) => dict[key][uiLang];

    const value = useMemo(
        () => ({ uiLang, setUiLang, learningLang, setLearningLang, t }),
        [uiLang, learningLang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);