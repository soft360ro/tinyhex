import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en';
import roTranslations from './translations/ro';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ro: {
        translation: roTranslations
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;