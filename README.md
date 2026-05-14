# SmileAura Dental Studio — Demo Website

A high-end, premium demo website built for a dental clinic, focusing on luxury private clinic aesthetics (Midnight Navy × Warm Gold × Pristine White). It serves as a high-conversion landing site and multi-page experience designed to impress dental clinic owners and patients alike.

## 🚀 Live Demo
*(Will be deployed via Vercel or similar)*

## ✨ Features

- **Premium Design System**: Midnight Navy & Warm Gold color palette, giving it a Harley Street London meets modern premium healthcare feel.
- **Dynamic Animations**: Built with Framer Motion for smooth page transitions, scroll reveals, and interactive elements.
- **Mobile-First Approach**: Fully responsive with touch-friendly elements, a dedicated mobile overlay menu, and a sticky WhatsApp CTA.
- **Interactive Components**: 
  - Smile Assessment Quiz
  - Before & After drag sliders
  - Interactive "Why Choose Us" accordions
  - Testimonial carousels
- **Multi-Page Architecture**: 
  - `/` Home
  - `/services` All Services
  - `/treatments/:slug` Dynamic Treatment Pages
  - `/about` About the Clinic
  - `/team` Meet the Doctors
  - `/gallery` Before & After + Clinic Gallery
  - `/contact` Contact, Location & Book Appointment

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM v6
- **Styling**: TailwindCSS v3
- **Animations**: Framer Motion v11
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Outfit, DM Sans, Space Mono)

## 📦 Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd smileaura-dental
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5174` (or the port specified in your terminal).

## 📁 Project Structure

```
src/
├── components/
│   ├── home/       # Homepage specific sections (Hero, TrustBar, etc.)
│   ├── layout/     # Global layout components (Navbar, Footer)
│   └── ui/         # Shared UI components (ScrollReveal, CountUp, etc.)
├── data/           # Global site data (Services, Doctors, FAQs, etc.)
├── pages/          # Main route components
├── store/          # Zustand state management
├── App.jsx         # App entry and Routing setup
├── index.css       # Global styles and Tailwind directives
└── main.jsx        # React root
```

## 🎯 Strategic Intent

This website is designed with a hidden objective: to sell web design services to dental clinic owners by showing them a shockingly different, Apple-like premium dental site compared to typical generic templates. It utilizes psychological design principles like typography authority (Cormorant Garamond), trust colors, and micro-animations to create an immediate premium impression.

## 📄 License

All rights reserved. Designed and built by PrimeLink Studio.
