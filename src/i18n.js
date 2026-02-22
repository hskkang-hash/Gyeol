
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Existing translations ...
      "Welcome to Gyeol": "Welcome to Gyeol",
      "Discover your daily flow and connect with the world.": "Discover your daily flow and connect with the world.",

      // Glossary Terms
      "glossary.title": "Glossary of Terms",
      "glossary.saju.term": "Life Energy Map (Saju)",
      "glossary.saju.definition": "An analysis of the unique energy blueprint you were born with, based on the year, month, day, and time of your birth. It offers insights into your personality, potential, and the flow of your life.",
      "glossary.manse.term": "Cosmic Calendar (Manse-ryeok)",
      "glossary.manse.definition": "An astrological calendar used to determine the celestial and energetic influences at a specific moment in time, forming the basis of the Life Energy Map.",
      "glossary.ascendant.term": "Ascendant Sign",
      "glossary.ascendant.definition": "Also known as your rising sign, it represents the zodiac sign that was ascending on the eastern horizon at the moment you were born. It influences your outward personality and how others see you.",

      // Footer Links
      "footer.company": "Company",
      "footer.about": "About Us",
      "footer.contact": "Contact Us",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.copyright": " Gyeol. All rights reserved.",
    }
  },
  ko: {
    translation: {
        // Existing translations ...
        "Welcome to Gyeol": "결에 오신 것을 환영합니다",
        "Discover your daily flow and connect with the world.": "당신의 일상적인 흐름을 발견하고 세상과 소통하세요.",
        
        // Glossary Terms
        "glossary.title": "주요 용어 안내",
        "glossary.saju.term": "사주 (Life Energy Map)",
        "glossary.saju.definition": "태어난 연, 월, 일, 시를 기반으로 한 개인의 고유한 에너지 청사진 분석입니다. 성격, 잠재력, 삶의 흐름에 대한 통찰력을 제공합니다.",
        "glossary.manse.term": "만세력 (Cosmic Calendar)",
        "glossary.manse.definition": "특정 시간의 천체 및 에너지 영향을 판단하는 데 사용되는 점성술 달력으로, 사주 분석의 기초를 형성합니다.",
        "glossary.ascendant.term": "상승궁 (Ascendant Sign)",
        "glossary.ascendant.definition": "당신이 태어난 순간 동쪽 지평선에서 떠오르고 있던 별자리입니다. 외적인 성격과 다른 사람에게 비치는 당신의 모습에 영향을 줍니다.",

        // Footer Links
        "footer.company": "회사",
        "footer.about": "소개",
        "footer.contact": "문의하기",
        "footer.legal": "정책",
        "footer.privacy": "개인정보처리방침",
        "footer.terms": "이용약관",
        "footer.copyright": " 결. 모든 권리 보유.",
    }
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

  export default i18n;
