import React, { useEffect, useRef, useState } from "react";
import { deck } from "./data/deck";
import Spread from "./components/Spread";
import Controls from "./components/Controls";
import ReadingSummary from "./components/ReadingSummary";
import "./App.css";

const POSITIONS = ["Past", "Present", "Future"];

function drawReading() {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck.slice(0, POSITIONS.length).map(card => ({
    ...card,
    reversed: Math.random() < 0.5,
    revealed: false,
  }));
}

function App() {
  const [cards, setCards] = useState([]);
  const hasStarted = useRef(false);
  const drawButton = useRef(null);
  const firstCard = useRef(null);
  const readingHeading = useRef(null);
  const hasCards = cards.length > 0;
  const isComplete = cards.length === POSITIONS.length && cards.every(card => card.revealed);

  useEffect(() => {
    if (isComplete) {
      readingHeading.current?.focus();
    } else if (hasCards) {
      firstCard.current?.focus();
    } else if (hasStarted.current) {
      drawButton.current?.focus();
    }
  }, [hasCards, isComplete]);

  function startReading() {
    hasStarted.current = true;
    setCards(drawReading());
  }

  function revealCard(id) {
    setCards(current => current.map(card =>
      card.id === id && !card.revealed ? { ...card, revealed: true } : card
    ));
  }

  function revealAll() {
    setCards(current => current.map(card =>
      card.revealed ? card : { ...card, revealed: true }
    ));
  }

  return (
    <main className="app">
      <header className="header">
        <h1>Lumina Tarot</h1>
        <p>A three-card reading for your past, present, and future.</p>
      </header>

      <section className="reading-table" aria-label="Tarot reading">
        <Spread
          positions={POSITIONS}
          cards={cards}
          onReveal={revealCard}
          firstCardRef={firstCard}
        />

        {isComplete ? (
          <ReadingSummary
            cards={cards}
            positions={POSITIONS}
            headingRef={readingHeading}
            onStartReading={startReading}
          />
        ) : (
          <Controls
            hasCards={hasCards}
            drawButtonRef={drawButton}
            onDraw={startReading}
            onRevealAll={revealAll}
            onReset={() => setCards([])}
          />
        )}
      </section>
    </main>
  );
}

export default App;
