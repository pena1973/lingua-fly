"use client";

export default function PromoBar() {
    return (

        <div className="promoBar">
            <div className="promoBarInner">
                <a
                    className="promoCard promoDev"
                    href="https://rino-labs.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h3>Rino Labs — разработка веб-приложений</h3>
                    <p>Современные SaaS-сервисы, Next.js, Node.js, UX-дизайн, архитектура.</p>
                </a>

                <a
                    className="promoCard promoAd"
                     href="mailto:ip.portu.me@gmail.com"
                    
                >
                    <h3>Здесь может быть ваша реклама</h3>
                    <p>
                        По вопросам размещения пишите: <br />
                        <strong>ip.portu.me@gmail.com</strong>
                    </p>
                </a>
            </div>
        </div>

    );
}
