import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './components/Translations/En.json';
import faTranslations from './components/Translations/Fa.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fa: { translation: faTranslations },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;