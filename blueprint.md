
# Project Blueprint

## Overview

This document outlines the plan for redesigning the "Gyeol" application. The goal is to create a visually appealing, mobile-first application with a responsive design, a new intro screen, and a theme switcher.

## Current State

The application is a React-based web app with several components for displaying "Gyeol" related information. The styling is basic and not optimized for mobile devices.

## Redesign Plan

### 1. Mobile-First and Responsive Design

- The application will be designed for a 9:16 aspect ratio, targeting mobile devices first.
- The layout will be responsive to ensure it looks good on larger screens (web).
- CSS media queries will be used to adapt the styling for different screen sizes.

### 2. Intro Screen

- A new, visually engaging intro screen will be created.
- The intro screen will be displayed for a few seconds when the application starts.
- It will feature an animation and a clean design to provide a great first impression.

### 3. Theme Switcher (Black/White)

- A theme switcher has been implemented to allow users to choose between a light (white) and dark (black) theme.
- The theme state is managed globally in the application using React's Context API.
- A UI control has been added to the header to toggle the theme.

### 4. Font and Typography

- The font has been updated to a more modern and suitable one, inspired by the provided design.
- Google Fonts is used to import the new font.
- Typography has been improved for better readability and visual hierarchy.

### 5. UI Overhaul

- The overall UI has been redesigned to be more modern and aesthetically pleasing.
- The color palette has been updated to match the new design.
- Components have been restyled to have a consistent and polished look.

## Action Steps

1.  **Create `blueprint.md`:** Document the plan.
2.  **Implement Theme Switcher:**
    - Create a `ThemeContext` to manage the theme.
    - Update `App.jsx` to use the `ThemeProvider`.
    - Add a theme toggle button to the `Header.jsx` component.
3.  **Responsive Design:**
    - Update `index.css` to set the base styles and aspect ratio.
    - Add media queries to component-specific CSS files.
4.  **Create Intro Screen:**
    - Create a new `Intro.jsx` component with animations.
    - Update `App.jsx` to show the intro screen on the first load.
5.  **Update Fonts:**
    - Add the new font from Google Fonts to `index.html`.
    - Update the theme to use the new font.
6.  **Restyle Components:**
    - Update the styling of all major components to align with the new design.
    - Create a new `Intro.jsx` component.
    - I'll start by restyling `App.jsx` and `index.css`.
