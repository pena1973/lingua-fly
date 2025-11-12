"use client";
import React, { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";


export default function ProfilePage() {
const { t } = useLang();
const [learningLang, setLearningLang] = useState<"en" | "pt" | "es">("en");


useEffect(() => {
const v = localStorage.getItem("learningLang");
if (v === "en" || v === "pt" || v === "es") setLearningLang(v);
}, []);


function save() {
localStorage.setItem("learningLang", learningLang);
alert("Saved");
}


return (
<div className="profile">
<h1>Profile</h1>
<label className="field">
<span>{t("choose_learning_lang")}</span>
<select value={learningLang} onChange={(e) => setLearningLang(e.target.value as any)}>
<option value="en">English</option>
<option value="pt">Português</option>
<option value="es">Español</option>
</select>
</label>
<button className="primary" onClick={save}>{t("save")}</button>
</div>
);
}