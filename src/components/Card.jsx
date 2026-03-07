import React from "react";
import "./Card.css";

const Card = ({ card, position, onClick }) => {
    // position: "Past", "Present", "Future", etc.
    if (!card) {
        return (
            <div className="card-wrapper">
                <div className="card-slot">
                    <span className="slot-label">{position}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card-wrapper">
            <div
                className={`card ${card.revealed ? "revealed" : ""}`}
                onClick={() => onClick(card.id)}
            >
                <div className="card-inner">
                    <div className="card-face card-back">
                        <div className="card-back-pattern"></div>
                    </div>
                    <div className={`card-face card-front ${card.reversed ? "reversed-card" : ""}`}>
                        <img
                            src={card.image}
                            alt={card.name}
                            className="card-artwork"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="card-position-label">{position}</div>
        </div>
    );
};

export default Card;
