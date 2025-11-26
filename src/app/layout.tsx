import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import CookieNotice from "@/components/CookieNotice";
import VisitCounterFooter from "@/components/VisitCounterFooter";
import Footer from "@/components/Footer";
export const metadata = { title: "LinguaFly" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <LanguageProvider>
                    <div className="root">
                        <Header />
                        <main className="main">{children}</main>
                        {/* футер с красивой цифиркой */}                        
                        <Footer />
                        <CookieNotice />
                    </div>

                </LanguageProvider>
            </body>
        </html>
    );
}