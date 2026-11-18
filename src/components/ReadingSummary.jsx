import React from "react";
import { getCardInterpretation } from "../data/meanings";
import { getCombinedReading } from "../data/combinedReading";

function ReadingSummary({ cards, positions, headingRef, onStartReading }) {
  const { interpretation, reflection } = getCombinedReading(cards);

  return (
    <section className="reading-summary" aria-labelledby="reading-heading">
      <h2 id="reading-heading" ref={headingRef} tabIndex={-1}>Your reading</h2>
      <div className="combined-reading">
        <p>{interpretation}</p>
        <p className="reading-reflection">
          <strong>Reflect</strong>
          {reflection}
        </p>
      </div>

      <section className="reading-details" aria-labelledby="card-meanings-heading">
        <h3 id="card-meanings-heading">Card meanings</h3>
        {cards.map((card, index) => (
          <details className="card-meaning" key={card.id}>
            <summary>
              <span className="meaning-label">
                {positions[index]} <span className="meaning-orientation">· {card.reversed ? "Reversed" : "Upright"}</span>
              </span>
              <span className="meaning-name">{card.name}</span>
            </summary>
            <p>{getCardInterpretation(card).meaning}</p>
          </details>
        ))}
      </section>

      <button className="btn btn-primary" type="button" onClick={onStartReading}>
        Start a new reading
      </button>
    </section>
  );
}

export default ReadingSummary;
