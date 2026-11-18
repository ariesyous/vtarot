import React from "react";
import Card from "./Card";
import "./Spread.css";

function Spread({ positions, cards, onReveal, firstCardRef }) {
  return (
    <ol className="spread" role="list" aria-label="Three-card spread">
      {positions.map((position, index) => (
        <Card
          key={position}
          position={position}
          card={cards[index]}
          onReveal={onReveal}
          buttonRef={index === 0 ? firstCardRef : undefined}
        />
      ))}
    </ol>
  );
}

export default Spread;
