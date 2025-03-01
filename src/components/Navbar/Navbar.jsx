import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import LanguageSwitcher from '../Translations/LanguageSwitcher';
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
const getMenuImageStyle=(lng)=>{
  if (lng==='fa'){
    return '3em'
  }
  else{
    return '0px'
  }
}
const handleDownload = () => {
  const fileName=i18n.language === 'fa'? 'MyResumeFa':'MyResumeEn';
  const fileUrl = 'assets/resume/'+fileName+'.pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
    // Set initial direction
    const direction = i18n.language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {t('Portfolio')}
      </a>
      <div className={styles.menu}>
        <img      
          style={{marginRight:getMenuImageStyle(i18n.language)}}
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t('about')}</a>
          </li>
          <li>
            <a href="#experience">{t('Experience')}</a>
          </li>
          <li>
            <a href="#projects">{t('Projects')}</a>
          </li>
          <li>
            <a href="#contact">{t('contact')}</a>
          </li>
          <li>
            <button  className={`${styles.downloadButton}`} onClick={handleDownload}>{t('resume')}</button>
          </li>
          <li>
          <LanguageSwitcher />
          </li>
        </ul> 
      </div>
    </nav>
  );
};
