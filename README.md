# SmileAura Dental Studio 🦷✨

SmileAura Dental Studio is a high-end, premium digital experience designed for luxury dental clinics. It serves as a modern, high-conversion landing site and comprehensive digital identity platform, tailored to attract premium clientele and showcase state-of-the-art clinical expertise.

This project was built with a meticulous focus on **design excellence**, featuring a sophisticated "Midnight Navy × Warm Gold × Pristine White" color palette, dynamic light/dark mode theming, and smooth Framer Motion animations.

## 🌟 Key Features

*   **Immersive Luxury Aesthetic:** A bespoke design system utilizing dark modes, glassmorphism, and gold accents to convey trust, authority, and exclusivity.
*   **Dynamic Theme Toggle:** A seamless, persistent Light/Dark mode implementation using Tailwind CSS variables.
*   **Interactive Components:** Engaging UI elements including:
    *   Interactive Before/After treatment sliders.
    *   Dynamic service carousels and treatment accordions.
    *   Scroll-revealed entry animations.
*   **Fully Responsive:** A mobile-first architecture ensuring the premium experience translates perfectly to any device size.
*   **Multi-Page Architecture:** Includes dedicated pages for Home, About, Services (with detail views), Team, Gallery, and Contact.
*   **High-Quality Visuals:** AI-generated, hyper-realistic clinical photography integrated seamlessly into the layout to replace standard placeholders.

## 🛠️ Technology Stack

*   **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **State Management:** [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JanSteve/smileaura-dental-studio.git
    cd smileaura-dental-studio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Design System

The core design system is maintained in `src/index.css` using CSS custom properties (variables) that are injected into Tailwind via `tailwind.config.js`. This allows for true, dynamic theme switching without relying solely on Tailwind's `dark:` utility prefix everywhere, keeping the component code clean.

### Color Palette
*   **Deep Backgrounds:** `var(--color-bg-deep)` (Swaps between pure white and Midnight Navy)
*   **Mid-Level Backgrounds:** `var(--color-bg-mid)`
*   **Card Backgrounds:** `var(--color-bg-card)`
*   **Primary Text:** `var(--color-text-soft)`
*   **Accents:** Gold (`#C9963A`) and Teal (`#2DD4BF`)

## 👨‍💻 How It Was Built

1.  **Foundation:** Initialized a Vite + React project and configured Tailwind CSS.
2.  **Architecture:** Structured the app with React Router for multi-page navigation and Zustand for lightweight global state management (handling active tabs and filters).
3.  **Theming Engine:** Created a robust custom CSS variable system in `index.css` that maps directly to Tailwind's color config, enabling the persistent theme toggle in the Navbar.
4.  **Component Development:** Built out the UI using a highly componentized approach, ensuring reusability (e.g., `ScrollReveal`, `BeforeAfterSlider`).
5.  **Visual Polish:** Replaced all structural placeholders with context-specific, high-resolution AI-generated imagery (e.g., clinic interiors, diverse doctor portraits, patient success stories).
6.  **Refinement:** Applied Framer Motion for smooth page transitions and scroll-triggered entrance animations, elevating the "premium" feel.
