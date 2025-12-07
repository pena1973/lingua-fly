"use client";

import { useLang } from "@/context/LanguageContext";

export default function PromoBar() {
  const { t } = useLang();

  return (
    <div className="promoBar">
      <div className="promoBarInner">
        <a
          className="promoCard promoDev"
          href="https://rino-labs.com"
          target="_blank"
          rel="noreferrer"
        >
          <h3>{t("promo_dev_title")}</h3>
          
          <p>{t("promo_dev_text2")}</p>
          <p style={{ fontSize: "12px" }}>{t("promo_dev_text1")}</p>
        </a>

        <a
          className="promoCard promoAd"
          href="mailto:ip.portu.me@gmail.com"
        >
          <h3>{t("promo_ad_title")}</h3>
          <p>
            {t("promo_ad_text")}
            <br />
            <strong> {t("promo_ad_text_contact")}</strong>
          </p>
        </a>
      </div>
    </div>
  );
}
