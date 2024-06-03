import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from '../../public/locales/en/translation.json'
import translation_vn from '../../public/locales/vn/translation.json'

const resources = {
  en: {
    translation: translation_en,
  },
  vi: {
    translation: translation_vn,
  },
}

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  lng: 'en',
  resources,
})

export default i18n
