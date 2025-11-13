"use client";
import React, { useEffect, useMemo, useState } from "react";
import { WordPair } from "@/data/library";
import { useLang } from "@/context/LanguageContext";

const BATCH_SIZE = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const LearnBoard: React.FC<{ words: WordPair[] }> = ({ words }) => {
  const { t } = useLang();

  const byId = useMemo(() => {
    const m = new Map<string, WordPair>();
    for (const w of words) m.set(w.id, w);
    return m;
  }, [words]);

  const [solved, setSolved] = useState<Set<string>>(new Set());

  const [queue, setQueue] = useState<string[]>([]);
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  // локальный стейт для «тряски» неверного слота
  const [shakeId, setShakeId] = useState<string | null>(null);

  useEffect(() => {
    const allIds = shuffle(words.map(w => w.id));
    setSolved(new Set());
    setVisibleIds(allIds.slice(0, BATCH_SIZE));
    setQueue(allIds.slice(BATCH_SIZE));
    setShakeId(null);
  }, [words]);

  const visibleUnsolvedIds = useMemo(
    () => visibleIds.filter(id => !solved.has(id)),
    [visibleIds, solved]
  );

  const topChoices = useMemo(
    () => shuffle(visibleUnsolvedIds.map(id => byId.get(id)!)),
    [visibleUnsolvedIds, byId]
  );

  const bottomPairs = useMemo(
    () => visibleUnsolvedIds.map(id => byId.get(id)!),
    [visibleUnsolvedIds, byId]
  );

  const mid = Math.ceil(bottomPairs.length / 2);
  const col1 = bottomPairs.slice(0, mid);
  const col2 = bottomPairs.slice(mid);

  function onDragStart(ev: React.DragEvent<HTMLDivElement>, nativeId: string) {
    ev.dataTransfer.setData("text/plain", nativeId);
  }

  function onDrop(ev: React.DragEvent<HTMLDivElement>, targetId: string) {
    const nativeId = ev.dataTransfer.getData("text/plain");

    if (nativeId === targetId) {
      // 1) помечаем решённым
      setSolved(prev => {
        const next = new Set(prev);
        next.add(targetId);
        return next;
      });

      // 2) убираем из окна и, если есть, подтягиваем следующую пару из очереди
      setVisibleIds(prev => {
        const without = prev.filter(id => id !== targetId);
        if (queue.length > 0) {
          const [nextId, ...rest] = queue;
          setQueue(rest);
          return [...without, nextId];
        }
        return without;
      });
    } else {
      // триггер «тряски» через стейт (без classList)
      setShakeId(targetId);
      setTimeout(() => setShakeId(null), 200);
    }
  }

  return (
    <div className="learn">
      <div className="learnHelp">{t("match_help")}</div>

      {/* ВЕРХ: максимум 10 вариантов для перетаскивания */}
      <div className="topRow">
        {topChoices.map((w) => (
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

      {/* НИЗ: парные слоты только для текущего окна */}
      <div className="pairsGrid">
        {[col1, col2].map((col, i) => (
          <div className="pairsCol" key={i}>
            {col.map((w) => {
              const isFilled = solved.has(w.id);
              const isShaking = shakeId === w.id;
              return (
                <div key={w.id} className="pairRow">
                  <div className="card target">{w.target}</div>
                  <div
                    className={`slot${isFilled ? " filled" : ""}${isShaking ? " shake" : ""}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, w.id)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="score">{`Done: ${solved.size}/${words.length}`}</div>
    </div>
  );
};
