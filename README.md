# Lumina Tarot

A beautiful, minimal frontend-only tarot web application built with React and Vite. Designed to be lightweight and statically deployable to GitHub Pages.

## Features
- Full 78-card Tarot Deck (Major and Minor Arcana)
- Shuffle button (required before drawing)
- 3-card spread (Past, Present, Future)
- Reveal cards one by one (or all at once)
- Support for reversed cards
- Mobile responsive, minimal glassmorphism aesthetics

## Project Structure
- `src/components/Card.jsx`: Face-down/face-up card component with 3D flip animation.
- `src/components/Spread.jsx`: Layout container for the 3-card spread.
- `src/components/Controls.jsx`: Buttons for shuffling, drawing, and resetting.
- `src/data/deck.js`: Data generation for the 78 tarot cards.
- `src/App.jsx`: Main application state holding the deck logic and drawn cards.

## Setup and Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages
1. Build the project:
   ```bash
   npm run build
   ```
2. The output will be in the `dist` folder.
3. You can use the `gh-pages` package to deploy:
   ```bash
   npx gh-pages -d dist
   ```
   Or simply push the project to GitHub and configure GitHub Actions / Pages to serve from the `dist` folder or root based on your repository setup. (The `vite.config.js` is already set to use relative paths).
