import React, { useState } from "react";
import { deck as initialDeck } from "./data/deck";
import Spread from "./components/Spread";
import Controls from "./components/Controls";
import { getMeaning } from "./data/meanings";
import "./App.css";

function App() {
  const [deck, setDeck] = useState(initialDeck);
  const [shuffled, setShuffled] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [showInterpretation, setShowInterpretation] = useState(false);

  const shuffleDeck = () => {
    // Fisher-Yates shuffle
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    // Assign reversed state randomly (approx 50% chance)
    const deckWithStates = newDeck.map(card => ({
      ...card,
      reversed: Math.random() > 0.5,
      revealed: false // Ensure all cards start face down
    }));

    setDeck(deckWithStates);
    setShuffled(true);
    setDrawnCards([]);
  };

  const drawCard = () => {
    if (drawnCards.length >= 3 || deck.length === 0) return;

    const cardToDraw = deck[0];
    const remainingDeck = deck.slice(1);

    setDeck(remainingDeck);
    setDrawnCards([...drawnCards, cardToDraw]);
  };

  const drawAll = () => {
    if (drawnCards.length >= 3 || deck.length < 3) return;

    const cardsNeeded = 3 - drawnCards.length;
    const cardsToDraw = deck.slice(0, cardsNeeded);
    const remainingDeck = deck.slice(cardsNeeded);

    setDeck(remainingDeck);
    setDrawnCards([...drawnCards, ...cardsToDraw]);
  };

  const revealCard = (id) => {
    setDrawnCards(drawnCards.map(card =>
      // Only reveal if it's the right card and it's not already revealed
      (card.id === id && !card.revealed) ? { ...card, revealed: true } : card
    ));
  };

  const newReading = () => {
    setDeck(initialDeck);
    setShuffled(false);
    setDrawnCards([]);
    setShowInterpretation(false);
  };

  // We only show the interpretation button in previous design, but here we still track completion if needed
  const allCardsRevealed = drawnCards.length === 3 && drawnCards.every(c => c.revealed);

  return (
    <div className="app">
      <header className="header animate-fade-in-slow">
        <h1>Tarot</h1>
        <p>Reflect on your past, present, and future.</p>
      </header>

      <main className="main-content">
        <Spread cards={drawnCards} onCardClick={revealCard} />

        <Controls
          canShuffle={!shuffled}
          onShuffle={shuffleDeck}
          canDraw={shuffled && drawnCards.length < 3}
          onDraw={drawCard}
          canDrawAll={shuffled && drawnCards.length === 0}
          onDrawAll={drawAll}
          onNewReading={newReading}
        />

        {shuffled && deck.length > 0 && !allCardsRevealed && (
          <div className="deck-status animate-fade-in">
            {deck.length} cards remaining
          </div>
        )}

        {allCardsRevealed && !showInterpretation && (
          <div className="interpretation-action animate-fade-in" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button className="btn btn-outline" onClick={() => setShowInterpretation(true)}>
              Reveal Insights
            </button>
          </div>
        )}

        {allCardsRevealed && showInterpretation && (
          <div className="reading-summary animate-fade-in" style={{ marginTop: '3rem', width: '100%', maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 300 }}>Your Reading Insights</h2>
            <div className="insights-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              {drawnCards.map((card, idx) => (
                <div key={card.id} className="insight-card" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  borderLeft: '4px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                      {["Past", "Present", "Future"][idx]}
                    </span>
                    <span style={{ fontWeight: 500, color: '#fff' }}>
                      {card.name} {card.reversed ? "(Reversed)" : ""}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {getMeaning(card)}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <button className="btn btn-primary" onClick={newReading}>Start New Reading</button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
