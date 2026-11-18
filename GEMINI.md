# GEMINI.md - Project Context

## Project Overview
**Lumina Tarot** is a minimal, frontend-only tarot web application built with **React 19** and **Vite**. It provides a 3-card spread (Past, Present, Future) and includes interpretations for both Major and Minor Arcana. The app is designed for easy deployment to static hosting like GitHub Pages.

### Key Technologies
- **Frontend Framework:** React 19
- **Build Tool:** Vite 8 (Beta)
- **Styling:** Vanilla CSS with a responsive spread and reduced-motion support
- **Linting:** ESLint 9

### Architecture & Components
- **`src/App.jsx`:** Shuffles the deck, tracks drawn cards, and displays the completed reading.
- **`src/data/deck.js`:** Generates the 78-card deck object, mapping names to local image paths.
- **`src/data/meanings.js`:** Contains upright and reversed meanings, themes, and next steps for every card.
- **`src/data/combinedReading.js`:** Connects the three card interpretations in position order.
- **`src/components/`:**
  - `Card.jsx`: Handles the 3D flip animation and card rendering (face-up/down, reversed).
  - `Spread.jsx`: Layout container for the 3-card reading.
  - `Controls.jsx`: Action buttons for drawing, revealing all cards, and starting over.
- **`public/cards/`:** Directory for card artwork (78 `.jpg` files).

## Building and Running

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Deploy
```bash
# Build for production (output in dist/)
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages (optional utility)
npx gh-pages -d dist
```

### Utility Scripts
- **`node downloadCards.js`**: Downloads the 78 tarot card images from a remote CDN and saves them into `public/cards/`. Run this if card images are missing.

## Development Conventions

### Coding Style
- **React Components:** Functional components with Hooks (`useState`).
- **State Management:** Local component state in `App.jsx`.
- **Styling:** Component-specific CSS files (e.g., `Card.css`) imported directly into JSX.
- **Animations:** CSS card flips with a reduced-motion override.

### Key Logic
- **Shuffle:** Implements the Fisher-Yates algorithm in `App.jsx`.
- **Card State:** Cards include `revealed` (boolean) and `reversed` (boolean) properties.
- **Meanings:** `getCardInterpretation` selects orientation-specific content. `getCombinedReading` uses it to write one interpretation and reflection prompt for the spread.

### Asset Management
- Card images follow a specific naming convention:
  - Major Arcana: `maj00.jpg` to `maj21.jpg`
  - Minor Arcana: `[suit][01-14].jpg` (suits: `wands`, `cups`, `swords`, `pents`).
