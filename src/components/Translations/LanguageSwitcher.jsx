import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Import the CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language
    setActiveLang(lng); // Update the active language state
    document.documentElement.setAttribute('dir', lng === 'fa' ? 'rtl' : 'ltr'); // Set RTL for Persian
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${activeLang === 'fa' ? 'active' : ''}`}
        onClick={() => changeLanguage('fa')}
      >
        FA
      </button>
    </div>
  );
};

export default LanguageSwitcher;