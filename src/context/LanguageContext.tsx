"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type UiLang = "ru" | "en";
export type LearningLang = "pt" | "en";


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
    match_help: {
        ru: "Перетащи карточку сверху к соответствующему слову снизу",
        en: "Drag a card from the top to a matching word below",
    },
    reset: { ru: "Сброс", en: "Reset" },
    learning_lang: { ru: "Изучаемый язык", en: "Learning language" },

    // --- Promo bar ---
    promo_dev_title: {
        ru: "Rino Labs — разработка веб-приложений",
        en: "Rino Labs — web application development",
    },
    promo_dev_text1: {
        ru: "(частный разработчик)",
        en: "(independent developer) ",
    },
    promo_dev_text2: {
        ru: "Современные SaaS-сервисы, Next.js, Node.js, UX-дизайн, архитектура.",
        en: "Modern SaaS products, Next.js, Node.js, UX design, architecture.",
    },
    promo_ad_title: {
        ru: "Курс португальского языка 32 евро / месяц",
        en: "Your advertisement could be here",
    },
    promo_ad_text: {
        ru: "В группе до 6 человек. Только разговорная практика и упражнения на слух. Преподаватель: кандидат филологических наук (phD) Лариса Сутулина. Опыт преподавания: 20 лет.",
        en: "For advertising inquiries, please contact:",
    },
    promo_ad_text_contact: {
        ru: "WhatsApp +38095 55 70618, E-mail:  sutulinalarisa@gmail.com",
        en: "ip.portu.me@gmail.com"
    },      
    tagline: {
        en: "Vocabulary Trainer",
        ru: "Тренажёр словарного запаса"
    }
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



export const LanguageContext = createContext<{
    uiLang: UiLang;
    setUiLang: (v: UiLang) => void;
    learningLang: LearningLang;
    setLearningLang: (v: LearningLang) => void;
    t: (key: keyof typeof dict) => string;
}>({
    uiLang: "ru",
    setUiLang: () => { },
    learningLang: "pt",
    setLearningLang: () => { },
    t: (k) => dict[k].ru,
});



export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [uiLang, setUiLangState] = useState<UiLang>("ru");
    const [learningLang, setLearningLangState] = useState<LearningLang>("pt");
    const [ready, setReady] = useState(false);

    useEffect(() => {

        setUiLangState(detectInitialLang());
        setLearningLangState(detectInitialLearningLang());
        setReady(true);
    }, []);

    const setUiLang = (v: UiLang) => {
        // не даём интерфейсу совпасть с языком, который учим
        setUiLangState((prev) => {
            if (v === learningLang) {
                return prev;
            }
            if (typeof window !== "undefined") localStorage.setItem("uiLang", v);
            return v;
        });
    };

    const setLearningLang = (v: LearningLang) => {
        // не даём языку обучения совпасть с языком интерфейса
        setLearningLangState((prev) => {
            if (v === uiLang) {
                return prev;
            }
            if (typeof window !== "undefined") localStorage.setItem("learningLang", v);
            return v;
        });
    };

    const t = (key: keyof typeof dict) => dict[key][uiLang];

    const value = useMemo(
        () => ({ uiLang, setUiLang, learningLang, setLearningLang, t }),
        [uiLang, learningLang]
    );
    
    if (!ready) return null; // или <Splash/>/<Skeleton/>

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);