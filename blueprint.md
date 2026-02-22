# Gyeol: Global Energy Analysis Platform - Blueprint

## 1. Vision & Strategy

**Core Vision:** To become the global leader in the "Energy Analysis" market, surpassing traditional fortune-telling apps like '점신' by offering a superior, data-driven, and visually stunning user experience.

**Strategic Pillars:**
1.  **AdSense Pre-pass (Content & Authority):** Build a content-rich, authoritative platform that Google trusts, ensuring rapid AdSense approval.
2.  **Unbeatable UX (Personalization & Visualization):** Shift from text-heavy reports to intuitive, beautiful data visualizations.
3.  **Global Monetization (Hybrid Model):** Rebrand for a global audience ("Saju" -> "Energy Analysis") and implement a hybrid Ad-Gated and Subscription model.

---

## 2. Phase 1: Onboarding & SEO (High Priority)

### 2.1. [UI-01] Immersive & Step-by-Step Onboarding
*   **Objective:** Create a beautiful, interactive, and user-friendly entry point that builds trust and excitement.
*   **Component:** `src/pages/Login.jsx` (will be refactored into a multi-step component).
*   **Design Concept:** "Cosmic Theme" - Deep Blue & Gold palette.
*   **Key Features:**
    *   **[ ] Step-by-Step Form:**
        1.  Step 1: Gender & Name.
        2.  Step 2: Birth Date (YYYY/MM/DD).
        3.  Step 3: Birth Time (HH:MM).
        4.  A progress bar will be displayed at the top.
    *   **[ ] Interactive Background:** Implement a real-time animated constellation/starry background.
    *   **[ ] Live Input Feedback:** As the user types their birth date, instantly display the corresponding day of the week and their Western zodiac sign (e.g., "You were born on a Tuesday, a vibrant Leo").
    *   **[ ] Dynamic Explanations ([FE-01]):** When a user focuses on an input field (e.g., Year), a section below will display text explaining the astrological significance of that data point.

### 2.2. [FE-02] SEO & Content Authority
*   **Objective:** Establish E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) to satisfy search engines and prepare for AdSense.
*   **Components:** `Footer.jsx`, and new policy pages.
*   **Key Features:**
    *   **[ ] Glossary Footer:** Add a permanent footer section defining key terms like "Saju (사주)", "Manse-ryeok (만세력)", "Ascendant", etc., rebranding them for a global audience (e.g., "Life Energy Map").
    *   **[ ] Essential Pages:** Create and link the following pages:
        - `src/pages/PrivacyPolicy.jsx`
        - `src/pages/TermsOfService.jsx`
        - `src/pages/ContactUs.jsx`
    *   **[ ] Dynamic Meta Tags:** Implement `react-helmet-async` to dynamically change the page title (e.g., `<title>What's My Cosmic Forecast Today?</title>`) based on user context.

---

## 3. Phase 2: Result Visualization (Medium Priority)

### 3.1. [UI-02] The Fortune Dashboard
*   **Objective:** Transform the results page from static text into an engaging, personalized dashboard.
*   **Component:** `src/pages/Home.jsx`
*   **Key Features:**
    *   **[ ] Data-Viz Library:** Integrate `Recharts` for creating charts.
    *   **[ ] Energy Gauge:** Display "Today's Cosmic Energy Index" as a 0-100% gauge chart.
    *   **[ ] Luck Radar Chart:** Visualize Love, Wealth, Health, and Career luck on a pentagonal radar chart.
    *   **[ ] Lucky Elements Cards:** Present today's lucky color, number, and direction as visually appealing icon-based cards.
    *   **[ ] Loading Animation:** Use `Lottie` to show a beautiful "celestial observation" animation while data is being calculated to prevent user drop-off.

---

## 4. Phase 3: Global Monetization & Localization (Medium Priority)

### 4.1. [BIZ-01, BIZ-02] Hybrid Business Model
*   **Objective:** Implement diverse revenue streams for a global audience.
*   **Key Features:**
    *   **[ ] Ad-Gated Content:** Gate detailed analysis (e.g., "Key dates to watch out for this month") behind a "Watch Ad to Unlock" button (rewarded ad model).
    *   **[ ] AI Fortune Counselor:**
        - Integrate the OpenAI API.
        - Create a chat interface where users can ask questions about their "Energy Analysis" (e.g., "How should I approach my meeting today?").
        - This will be a subscription-based feature.

### 4.2. [i18n] Advanced Localization
*   **Objective:** Make the app feel native to users anywhere in the world.
*   **Key Features:**
    *   **[ ] Terminology Translation:** Update `i18n.js` to translate core concepts:
        - '사주' -> 'Life Energy Map'
        - '운세' -> 'Cosmic Forecast'
    *   **[ ] Auto Language Detection:** Implement logic to detect the user's browser/system language (`navigator.language`) and set the initial language automatically.

