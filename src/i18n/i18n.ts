import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import plJSON from './translations/pl';

const resources = {
  pl: { translation: plJSON }
};

i18n.use(initReactI18next).init({
  resources,
  keySeparator: false,
  lng: 'pl',
  fallbackLng: 'pl',
  react: {
    useSuspense: true
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
