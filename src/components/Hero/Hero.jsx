import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("me")}</h1>
        <p className={styles.description}>
        {t("inroduceMe")}
        </p>
        <a href="mailto:N.mahmoodi8001@email.com" className={styles.contactBtn}>
        {t("contact")}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
