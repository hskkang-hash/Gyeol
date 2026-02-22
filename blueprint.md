# Gyeol App Blueprint

## 1. Project Overview

**Purpose:** A web application that provides daily Saju (Korean fortune-telling) analysis, recommendations, and matching services based on a user's birth date.

**Target Audience:** Users interested in Korean culture, self-reflection, and fortune-telling.

**Key Features:**
- Daily personalized Saju-based summary and aura.
- Recommended activities.
- "Gyeol-Sync" social feed.
- "Gyeol Matching" to find compatible users.
- Premium services for deeper insights.
- Multi-language support (Korean, English).
- Light/Dark theme modes.

## 2. Design & UI/UX Principles (Global Best Practice)

- **Aesthetics:** Modern, clean, and visually balanced. Use of high-quality typography, iconography, and a refined color palette. Incorporate subtle animations and a "stitch" design motif for a unique, premium feel.
- **Intuitiveness:** Simple navigation and clear information hierarchy. User actions should be predictable and feedback immediate.
- **Accessibility:** Adherence to a11y standards, ensuring the app is usable for everyone.
- **Responsiveness:** Mobile-first design that adapts flawlessly to all screen sizes.
- **AdSense Ready:** Content-first approach with clear, valuable information. No intrusive elements.

## 3. Current Task: Major UI/UX Overhaul & Feature Implementation

### 3.1. New User Entry Flow (Login Page)

**Objective:** Create a beautiful and intuitive entry point for users to input their birth date.

- **Component:** `src/pages/Login.jsx`
- **Path:** `/`
- **Elements:**
    - **Logo:** A new "Gyeol" logo with a "stitch" design will be prominently displayed. (`src/components/Logo.jsx`)
    - **Input Fields:**
        - Three separate, clearly labeled input fields for Year (YYYY), Month (MM), and Day (DD).
        - Placeholders will show the current date in a faded, blurred style as an example (e.g., 2024 / 07 / 31).
    - **Action Button:** A button labeled "See My Gyeol" or similar to navigate the user to the main dashboard.
- **Navigation:** Upon successful input/button click, the user will be navigated to the `/home` route.

### 3.2. Main Dashboard (Home Page)

**Objective:** Refactor the existing UI into a dedicated, well-structured home page.

- **Component:** `src/pages/Home.jsx`
- **Path:** `/home`
- **Content:** All existing dashboard elements (Today's Summary, Aura, Recommendations, etc.) will be moved here.
- **Layout:** A responsive grid layout will be used to organize the content cards effectively.

### 3.3. App Structure & Routing

**Objective:** Implement a robust routing and state management structure.

- **File:** `src/App.jsx`
- **Routing:**
    - Use `react-router-dom` to manage navigation.
    - `Route "/"` -> `Login` component.
    - `Route "/home"` -> `Home` component.
- **State Management:**
    - **Theme (Light/Dark):** A new `ThemeContext` will be created to manage the theme state (`light` or `dark`) across the entire application. This will be independent of the i18n language state.
    - **Language:** `i18next` will continue to manage language state.

### 3.4. UI Component & Style Fixes

**Objective:** Resolve UI conflicts and elevate the visual design.

- **Header/Nav:** Create a persistent header component.
- **Toggles:** The theme (dark/light mode) toggle and the language switcher will be placed in the header, ensuring they do not overlap or conflict visually or functionally.
- **Logo Redesign:** A new component `src/components/Logo.jsx` will be created to render the "결" text with a stylish stitch effect using CSS.
- **Global Styles:** Refine the MUI theme (colors, typography, spacing) in `src/theme.js` to align with the new premium design direction.

