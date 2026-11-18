import React from "react";
import "./Card.css";

function Card({ card, position, onReveal, buttonRef }) {
  const revealed = card?.revealed;

  return (
    <li className="spread-card">
      <span className="card-position">{position}</span>
      {card ? (
        <button
          className={revealed ? "card card-revealed" : "card"}
          type="button"
          ref={buttonRef}
          aria-label={revealed ? `${position} card revealed` : `Reveal ${position} card`}
          aria-disabled={revealed || undefined}
          tabIndex={revealed ? -1 : undefined}
          onClick={revealed ? undefined : () => onReveal(card.id)}
        >
          <span className="card-inner" aria-hidden="true">
            <span className="card-face card-back" />
            <span className="card-face card-front">
              <img
                src={card.image}
                alt=""
                decoding="async"
                className={card.reversed ? "card-artwork card-artwork-reversed" : "card-artwork"}
              />
            </span>
          </span>
        </button>
      ) : (
        <div className="card-preview card-back" aria-hidden="true" />
      )}
      {card && (
        <div className="card-caption" aria-live="polite" aria-atomic="true">
          {revealed && (
            <>
              <span className="card-name">{card.name}</span>
              <span className="card-orientation">{card.reversed ? "Reversed" : "Upright"}</span>
            </>
          )}
        </div>
      )}
    </li>
  );
}

export default Card;
