import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to Gyeol": "Welcome to Gyeol",
      "Discover your daily flow and connect with the world.": "Discover your daily flow and connect with the world.",
      "Today's K-Vibe": "Today's K-Vibe",
      "Gyeol-Sync Feed": "Gyeol-Sync Feed",
      "Gyeol Matching": "Gyeol Matching",
      "Find your Gyeol-mate": "Find your Gyeol-mate",
      "Start Matching": "Start Matching",
      "Premium Services": "Premium Services",
      "Unlock deeper insights": "Unlock deeper insights",
      "Go Premium": "Go Premium",
      "Today's Gyeol Aura": "Today's Gyeol Aura",
      "Premium Consulting": "Premium Consulting",
      "Get answers to life's important decisions with a one-on-one in-depth consultation with a Saju expert.": "Get answers to life's important decisions with a one-on-one in-depth consultation with a Saju expert.",
      "Learn More": "Learn More",
      "Ad-free app usage": "Ad-free app usage",
      "Unlimited Gyeol Matching": "Unlimited Gyeol Matching",
      "Subscribe for ₩9,900/month": "Subscribe for ₩9,900/month",
    }
  },
  ko: {
    translation: {
        "Welcome to Gyeol": "결에 오신 것을 환영합니다",
        "Discover your daily flow and connect with the world.": "당신의 일상적인 흐름을 발견하고 세상과 소통하세요.",
        "Today's K-Vibe": "오늘의 K-Vibe",
        "Gyeol-Sync Feed": "결 동기화 피드",
        "Gyeol Matching": "결 매칭",
        "Find your Gyeol-mate": "결이 맞는 소울메이트를 찾아보세요",
        "Start Matching": "매칭 시작",
        "Premium Services": "프리미엄 서비스",
        "Unlock deeper insights": "더 깊은 통찰력을 잠금 해제하세요",
        "Go Premium": "프리미엄으로 가기",
        "Today's Gyeol Aura": "오늘의 결 오라",
        "Premium Consulting": "프리미엄 컨설팅",
        "Get answers to life's important decisions with a one-on-one in-depth consultation with a Saju expert.": "사주 전문가와의 1:1 심층 상담을 통해 인생의 중요한 결정에 대한 해답을 얻으세요.",
        "Learn More": "더 알아보기",
        "Ad-free app usage": "광고 없는 앱 사용",
        "Unlimited Gyeol Matching": "결 매칭 무제한",
        "Subscribe for ₩9,900/month": "월 9,900원으로 구독",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;