# Gyeol: Life-Sync Service - Blueprint v3.0

## 1. 🚀 Core Vision & Global Branding

*   **Core Vision:** To be the leading **Life-Sync** service by providing AI-personalized, strategic future predictions.
*   **Brand Identity:** GYEOL (결) - "Sync with your destiny."
*   **Market Positioning:** Not as 'Fortune-telling', but as **'Cosmic Wellness'** & **'Life-Sync'** to build a premium, global brand.
*   **Key Branding Words:** Flow (흐름), Sync (일치), Harmony (조화).

---

## 2. 🎨 Content Strategy: The Soul of GYEOL

### 2.1. Hyper-Personalized Messaging (`Daily Oracle`)

*   **Objective:** Deliver the daily vibe (`vibe_score`) from the Saju engine (Stitch) with a tone and manner tailored to the user's life stage and gender, stored in Firebase (`user_profile`).

*   **Age/Gender Segments & Tone:**
    *   **A. 20s (The Explorer):** Trendy, supportive, action-oriented, intuitive.
        *   *Female:* "오늘 당신의 '결'은 핑크빛이에요! 새로운 카페나 낯선 공간에서 뜻밖의 인연이 기다리고 있을지도 몰라요. #도전 #설렘"
        *   *Male:* "결이 말해주네요. 오늘은 고민보다 GO! 프로젝트나 운동 등 에너지를 발산할수록 더 큰 운이 따라올 거예요."
    *   **B. 30-40s (The Achiever):** Professional, efficient, harmonious, practical advice.
        *   *Female:* "내면의 결을 다듬을 시간입니다. 오늘은 중요한 미팅보다 자신을 돌보는 시간이 향후 더 큰 비즈니스 운을 가져다줄 거예요."
        *   *Male:* "재물운의 결이 매끄럽습니다. 미뤄뒀던 투자 결정이나 커리어 관련 대화에서 주도권을 잡기에 최적인 날입니다."
    *   **C. 50+ (The Sage):** Dignified, stable, health-focused, wise insight.
        *   *Female:* "평온한 결의 흐름이 느껴집니다. 주변 사람들과 따뜻한 기운을 나누며 건강을 챙기기에 더없이 좋은 날입니다."
        *   *Male:* "성급함보다는 여유로운 결을 유지하세요. 순리대로 흘러가게 두는 것이 결국 당신의 명예를 지켜줄 것입니다."

### 2.2. Global Feature Naming & Copy

| Feature             | Global Name         | KR Copywriting                  | Core Concept                       |
| ------------------- | ------------------- | ------------------------------- | ---------------------------------- |
| Main Dashboard      | **Your Vibe**       | "내 삶의 결을 읽다"           | Intuitive vibe index               |
| Personalized Msg    | **Daily Oracle**    | "오늘 당신에게 흐르는 기운"     | Mystical, personalized insight     |
| Auspicious Days     | **Golden Days**     | "놓치지 말아야 할 기회의 순간"  | Timing for success & luck        |
| Friend Compatibility| **Vibe-Match**      | "우리 사이, 결이 맞을까?"      | Casual, viral, like MBTI           |
| Premium Report      | **Deep Flow Report**| "당신만의 심층 운명 가이드"     | Professional, high-value           |
| Expert Session      | **1:1 Curator**     | "마음의 결을 상담하세요"        | Premium, curated guidance          |

---

## 3. 💻 Technical & Business Directives

### 3.1. For the Business Lead

*   **Marketing Strategy:** Position GYEOL as 'Cosmic Wellness' or 'Life-Sync', avoiding 'Fortune-telling' to lower barriers in Western markets and build a premium brand.
*   **Retention Campaign:** Launch a 'Your Monthly Flow' newsletter at the beginning of each month, personalized based on the user's birth information, to increase user retention.

### 3.2. For the Development Lead

*   **Internationalization (i18n):** Implement `react-i18next` in the React frontend to enable seamless Korean/English language switching.
*   **Data Logic for Messaging:**
    1.  Fetch `age_group` and `gender` from the `user_profile` in Firestore.
    2.  Combine this with the `vibe_score` calculated from Stitch Functions.
    3.  Design a system to match this combined data to the appropriate message template.
*   **Payment Gateway Scalability:** Structure the API to support not only Google Pay but also Apple Pay and Stripe for global market expansion.

---

## 4. ✨ The GYEOL Experience Principle

> "Simple text delivery is no different from 'Jeomshin'. Where we will win is in the **'vibe of the message'**. While maintaining a tone and manner like a close friend giving sincere advice, we must add smooth animations (**Framer Motion**) to the UI, making the user feel comforted the moment they open the app."

*   **Action Item:** Implement `Framer Motion` for subtle, elegant animations on key UI elements like the Dashboard card to enhance the user experience.

