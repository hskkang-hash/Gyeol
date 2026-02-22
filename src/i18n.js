
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            // Onboarding & General
            "Welcome to Gyeol": "Welcome to Gyeol",
            "Discover your daily flow and connect with the world.": "Discover your daily flow and connect with the world.",

            // Home Page
            "home.tagline": "Today's cosmic forecast, tailored to your unique energy.",
            "home.todaysGyeol": "Today's Gyeol",
            "home.myCosmos": "My Cosmos",
            "home.relationshipGyeol": "Relationship Gyeol",
            
            // Today's Gyeol Card
            "today.element": "Today's Element",
            "today.color": "Auspicious Color",
            "today.number": "Lucky Number",
            "today.direction": "Favorable Direction",
            "elements.wood": "Wood",
            "colors.blue": "Blue",
            "directions.east": "East",

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
              // Onboarding & General
              "Welcome to Gyeol": "결에 오신 것을 환영합니다",
              "Discover your daily flow and connect with the world.": "당신의 일상적인 흐름을 발견하고 세상과 소통하세요.",
              
              // Home Page
              "home.tagline": "당신의 고유한 에너지에 맞춰진 오늘의 우주적 예보.",
              "home.todaysGyeol": "오늘의 결",
              "home.myCosmos": "나의 천체",
              "home.relationshipGyeol": "관계의 결",

              // Today's Gyeol Card
              "today.element": "오늘의 오행",
              "today.color": "길한 색상",
              "today.number": "행운의 숫자",
              "today.direction": "유리한 방향",
              "elements.wood": "목(木)",
              "colors.blue": "파란색",
              "directions.east": "동쪽",
              
              // Glossary Terms
              "glossary.title": "주요 용어 안내",
              "glossary.saju.term": "사주 (Life Energy Map)",
              "glossary.saju.definition": "태어난 연, 월, 일, 시를 기반으로 한 개인의 고유한 에너지 청사진 분석입니다. 성격, 잠재력, 삶의 흐름에 대한 통찰력을 제공합니다.",
              "glossary.manse.term": "만세력 (Cosmic Calendar)",
              "glossary.manse.definition": "특정 시간의 천체 및 에너지 영향을 판단하는 데 사용되는 점성술 달력으로, 사주 분석의 기초를 형성합니다.",
             "glossary.unse.term": "운세 (Cosmic Forecast)",
             "glossary.unse.definition": "개인의 사주와 특정 시점의 천체 에너지를 기반으로 미래의 사건, 행운, 도전을 예측하는 것입니다.",
              "glossary.ascendant.term": "상승궁 (Ascendant Sign)",
              "glossary.ascendant.definition": "당신이 태어난 순간 동쪽 지평선에서 떠오르고 있던 별자리입니다. 외적인 성격과 다른 사람에게 비치는 당신의 모습에 영향을 줍니다.",

              // Footer Links
              "footer.company": "회사",
              "footer.about": "소개",
              "footer.contact": "문의하기",
              "footer.legal": "법적 고지",
              "footer.privacy": "개인정보 처리방침",
              "footer.terms": "서비스 이용약관",
              "footer.copyright": " Gyeol. 모든 권리 보유.",
          }
      }
    },
    lng: "ko", // 기본 설정 언어
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;