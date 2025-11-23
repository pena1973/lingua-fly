import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import CookieNotice from "@/components/CookieNotice";
export const metadata = { title: "LinguaFly" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <LanguageProvider>
                    <div className="root">
                        <Header />
                        <main className="main">{children}</main>
                         <CookieNotice />
                    </div>

                </LanguageProvider>
            </body>
        </html>
    );
}