"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const texts = {
  ru: {
    text: "Мы используем небольшую техническую куку для запоминания выбранного языка. Если вы не согласны — пожалуйста, покиньте сайт.",
    accept: "Согласен",
    decline: "Покинуть",
  },
  en: {
    text: "We use a small technical cookie to remember your chosen language. If you do not agree, please leave the site.",
    accept: "Accept",
    decline: "Leave",
  },
};

export default function CookieNotice() {
  const { uiLang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = typeof window !== "undefined"
      ? localStorage.getItem("lf_cookie_accept")
      : null;
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("lf_cookie_accept", "yes");
    setVisible(false);
  }

  function decline() {
    window.location.href = "https://google.com";
  }

  if (!visible) return null;

  const current =
    uiLang === "ru" || uiLang === "en" ? texts[uiLang] : texts.en;

  return (
    <div className="cookieBanner">
      <div className="cookieText">{current.text}</div>

      <div className="cookieActions">
        <button className="cookieBtn cookieBtnPrimary" onClick={accept}>
          {current.accept}
        </button>
        <button className="cookieBtn cookieBtnSecondary" onClick={decline}>
          {current.decline}
        </button>
      </div>
    </div>
  );
}
