import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import CookieNotice from "@/components/CookieNotice";

import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
// export const metadata = { title: "LinguaFly" };

// export const metadataRu = {
//     title: "LinguaFly — тренажёр словарного запаса | Изучение языков через примеры и двуязычные тексты",
//     description:
//         "LinguaFly — это инструмент для увеличения словарного запаса. Учите слова естественно: через примеры, двуязычные тексты, повторения и интеллектуальный тренажёр запоминания. Поддерживает русский, английский, португальский.",
//     keywords: [
//         "изучение языков",
//         "английский язык",
//         "португальский язык",
//         "тренажер слов",
//         "словарный запас",
//         "билингвальные тексты",
//         "учить слова онлайн",
//         "языковая практика",
//         "A1 A2 B1 слова",
//     ],
//     openGraph: {
//         title: "LinguaFly — тренажёр словарного запаса",
//         description:
//             "Онлайн-платформа для изучения слов через примеры, двуязычные тексты и интеллектуальный тренажёр запоминания.",
//         url: "https://lingua-fly.com",
//         siteName: "LinguaFly",
//         images: [
//             {
//                 url: "https://lingua-fly.com/og-image.png",
//                 width: 1200,
//                 height: 630,
//                 alt: "LinguaFly — Vocabulary Trainer",
//             },
//         ],
//         locale: "ru_RU",
//         type: "website",
//     },
// };
// export const metadataEN = {


//     title: "LinguaFly — Vocabulary Trainer/Tренажёр словарного запаса | Learn Languages with Bilingual Texts & Smart Repetition/Изучение языков через примеры и двуязычные тексты",
//     description:
//         "LinguaFly is a vocabulary-building trainer that helps you learn languages naturally using bilingual texts, examples, spaced repetition and interactive word exercises. Supports English, Portuguese and Russian.",
//     keywords: [
//         "language learning",
//         "vocabulary trainer",
//         "learn vocabulary",
//         "bilingual texts",
//         "spaced repetition",
//         "study English",
//         "study Portuguese",
//         "A1 A2 vocabulary",
//         "learn words online",
//     ],
//     openGraph: {
//         title: "LinguaFly — Vocabulary Trainer",
//         description:
//             "Improve your vocabulary with bilingual examples, smart repetition and interactive word exercises.",
//         url: "https://lingua-fly.com",
//         siteName: "LinguaFly",
//         images: [
//             {
//                 url: "https://lingua-fly.com/og-image.png",
//                 width: 1200,
//                 height: 630,
//                 alt: "LinguaFly — Vocabulary Trainer",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//     },
// };

export const metadata = {
    title:
        "LinguaFly — Vocabulary Trainer / Тренажёр словарного запаса | Learn words with bilingual texts / Учите слова по двуязычным текстам",
    description:
        "Vocabulary trainer for language learners / Тренажёр словарного запаса для изучающих языки. Bilingual texts, examples and trainer / Двуязычные тексты, примеры и тренажер.",
    keywords: [
        "learn languages / изучение языков",
        "vocabulary trainer / тренажёр словарного запаса",
        "learn English / изучение английского",
        "learn Portuguese / изучение португальского",
        "bilingual texts / двуязычные тексты",
        "online vocabulary practice / тренировка слов онлайн",
        "word repetition / повторение слов",
        "A1 A2 vocabulary / словарный запас A1 A2",
        "language learning app / приложение для изучения языков",
        "memorize words / запоминание слов",
    ],
    openGraph: {
        title:
            "LinguaFly — Vocabulary Trainer / Тренажёр словарного запаса",
        description:
            "Learn with bilingual texts and smart word repetition / Учитесь по двуязычным текстам и умным повторениям слов.",
        url: "https://lingua-fly.com",
        siteName: "LinguaFly",
        images: [
            {
                url: "https://lingua-fly.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "LinguaFly — Vocabulary Trainer / Тренажёр словарного запаса",
            },
        ],
        type: "website",
    },
};
import Script from "next/script";

const linguaFlyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LinguaFly",
    alternateName:
        "LinguaFly — Vocabulary Trainer / Тренажёр словарного запаса",
    url: "https://lingua-fly.com",
    description:
        `Personal side project and helper tool for language learners. 
        Based on the creator’s personal experience and not an educational program or an official learning offer. / 
        Личный проект и вспомогательный инструмент для изучающих языки. 
        Основан на личном опыте создателя и не является образовательной программой или официальным учебным предложением.`,
    inLanguage: ["en", "ru", "pt"],
    // просто утилита, без официального 'educational' позиционирования
    applicationCategory: "Utility",
    creator: {
        "@type": "Person",
        name: "Natalia Barinova",
    },
    publisher: {
        "@type": "Person",
        name: "Natalia Barinova",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <Script
                    id="linguafly-jsonld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(linguaFlyJsonLd),
                    }}
                />
            </head>
            <body>
                <LanguageProvider>
                    <div className="root">
                        <Header />
                        <PromoBar />
                        <main className="main">{children}</main>
                        <Footer />
                        <CookieNotice />
                    </div>

                </LanguageProvider>
            </body>
        </html>
    );
}