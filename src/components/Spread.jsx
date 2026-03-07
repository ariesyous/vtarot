import React from "react";
import Card from "./Card";
import "./Spread.css";

const POSITIONS = ["Past", "Present", "Future"];

const Spread = ({ cards, onCardClick }) => {
    return (
        <div className="spread-container">
            {POSITIONS.map((pos, index) => (
                <Card
                    key={index}
                    position={pos}
                    card={cards[index] || null}
                    onClick={onCardClick}
                />
            ))}
        </div>
    );
};

export default Spread;
