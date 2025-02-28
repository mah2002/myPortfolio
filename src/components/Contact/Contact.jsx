import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact')}</h2>
        <p>{t('FeelFree')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:N.mahmoodi8001@email.com">N.mahmoodi8001@email.com</a>
        </li>
        {/* <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li> */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/mah2002">github.com/mah2002</a>
        </li>
      </ul>
    </footer>
  );
};
