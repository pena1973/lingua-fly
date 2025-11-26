import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import CookieNotice from "@/components/CookieNotice";

import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
export const metadata = { title: "LinguaFly" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
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