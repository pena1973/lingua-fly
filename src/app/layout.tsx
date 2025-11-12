import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Sidebar } from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata = { title: "LinguaFly" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <LanguageProvider>
                    <div className="root">
                        <Header />
                        <main className="main">{children}</main>
                    </div>

                </LanguageProvider>
            </body>
        </html>
    );
}