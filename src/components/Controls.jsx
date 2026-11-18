import React from "react";
import "./Controls.css";

function Controls({ hasCards, drawButtonRef, onDraw, onRevealAll, onReset }) {
  return (
    <div className="controls">
      {hasCards ? (
        <>
          <p className="reading-instruction">Choose a card to turn it over.</p>
          <button className="btn btn-primary" type="button" onClick={onRevealAll}>
            Reveal all
          </button>
          <button className="btn btn-text" type="button" onClick={onReset}>
            Start over
          </button>
        </>
      ) : (
        <button className="btn btn-primary" type="button" ref={drawButtonRef} onClick={onDraw}>
          Draw three cards
        </button>
      )}
    </div>
  );
}

export default Controls;
