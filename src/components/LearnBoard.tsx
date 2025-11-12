"use client";
import React, { useMemo, useState } from "react";
import { WordPair } from "@/data/library";
import { useLang } from "@/context/LanguageContext";

export const LearnBoard: React.FC<{ words: WordPair[] }> = ({ words }) => {
    const { t } = useLang();

    // Множество решённых id
    const [solved, setSolved] = useState<Set<string>>(new Set());

    // Карточки сверху (перемешанные); фильтруем уже решённые
    const shuffledTop = useMemo(
        () => [...words].sort(() => Math.random() - 0.5),
        [words]
    );
    const topVisible = shuffledTop.filter(w => !solved.has(w.id));

    //   // Список снизу — только не решённые
    //   const bottomVisible = words.filter(w => !solved.has(w.id));

    function onDragStart(ev: React.DragEvent<HTMLDivElement>, nativeId: string) {
        ev.dataTransfer.setData("text/plain", nativeId);
    }

    function onDrop(ev: React.DragEvent<HTMLDivElement>, targetId: string) {
        const nativeId = ev.dataTransfer.getData("text/plain");
        // Верный матч — id совпадают
        if (nativeId === targetId) {
            setSolved(prev => {
                const next = new Set(prev);
                next.add(targetId);
                return next;
            });
            // Небольшая визуальная обратная связь
            (ev.currentTarget as HTMLDivElement).classList.add("filled");
            setTimeout(() => (ev.currentTarget as HTMLDivElement).classList.remove("filled"), 200);
        } else {
            // Неверно — можно кратко подсветить
            ev.currentTarget.animate([{ transform: "translateX(0)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 180 });
        }
    }


    // Список снизу — только не решённые
    const bottomVisible = words.filter(w => !solved.has(w.id));

    // Делаем две колонки, делим список пополам
    const mid = Math.ceil(bottomVisible.length / 2);
    const col1 = bottomVisible.slice(0, mid);
    const col2 = bottomVisible.slice(mid);

    return (
        <div className="learn">
            <div className="learnHelp">{t("match_help")}</div>

            {/* верхний ряд карточек */}
            <div className="topRow">
                {topVisible.map((w) => (
                    <div
                        key={w.id}
                        className="card draggable"
                        draggable
                        onDragStart={(e) => onDragStart(e, w.id)}
                    >
                        {w.native}
                    </div>
                ))}
            </div>

            {/* ДВЕ КОЛОНКИ пар */}
            <div className="pairsGrid">
                {[col1, col2].map((col, i) => (
                    <div className="pairsCol" key={i}>
                        {col.map((w) => (
                            <div key={w.id} className="pairRow">
                                <div className="card target">{w.target}</div>
                                <div
                                    className="slot"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => onDrop(e, w.id)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="score">{`Done: ${solved.size}/${words.length}`}</div>
        </div>
    );
};
