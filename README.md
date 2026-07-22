# Rustamov Islom — Portfolio

A modern, dark-themed, glassmorphism personal portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (scroll reveals, page/interaction animations)
- Lucide React (icons)

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

> Note: install with `--legacy-peer-deps` because `lucide-react@0.383` declares a peer range that predates React 19 — it still works perfectly with React 19, npm's resolver is just being conservative.

## Structure

```
src/
  components/     Section & UI components (Navbar, Hero, About, Skills, ...)
  data/           Single source of truth for content (portfolioData.js)
  hooks/          useActiveSection, useMousePosition
  index.css       Global styles, glassmorphism & cursor utilities
  App.jsx         Page composition
```

## Customize

- **Content**: edit `src/data/portfolioData.js` (name, bio, skills, projects, socials, contact info).
- **Colors**: edit the `primary` / `secondary` / `accent` / `base` values in `tailwind.config.js`.
- **Profile image**: swap the initials placeholder in `Hero.jsx`'s image column for an `<img>` tag.
- **Project images**: replace the Unsplash URLs in `portfolioData.js` with your own screenshots.
- **Contact form**: currently simulates sending (no backend). Wire it to an email service (e.g. Formspree, EmailJS, or your own API) inside `Contact.jsx`'s `handleSubmit`.

## Features implemented

Loading screen, custom cursor, animated particle background, mouse-parallax hero image, typing-effect subtitle, animated counters, skills progress bars, timeline-style About section, glassmorphism cards throughout, gradient-border cards, scroll-reveal animations, sticky/blurring navbar with active-link tracking, animated glowing buttons, animated contact form with states, social icons, back-to-top button, and full mobile-first responsiveness.
