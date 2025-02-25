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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
          <LanguageSwitcher />
          </li>
        </ul> 
      </div>
    </nav>
  );
};
