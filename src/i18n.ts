import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fi"],
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          frontPageText: "This is the front page",
        },
      },
      fi: {
        translation: {
          home: "Etusivu",
          about: "Tietoa Meistä",
          frontPageText: "Tämä on etusivu",
        },
      },
    },
  });

export default i18n;
