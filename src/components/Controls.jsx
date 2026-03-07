import React from "react";
import "./Controls.css";

const Controls = ({
    canShuffle,
    onShuffle,
    canDraw,
    onDraw,
    canDrawAll,
    onDrawAll,
    onNewReading
}) => {
    return (
        <div className="controls">
            {canShuffle && (
                <button className="btn btn-primary animate-fade-in" onClick={onShuffle}>
                    Shuffle Deck
                </button>
            )}

            {canDraw && (
                <>
                    <button className="btn btn-secondary animate-fade-in" onClick={onDraw}>
                        Draw Card
                    </button>
                    {canDrawAll && (
                        <button className="btn btn-outline animate-fade-in" onClick={onDrawAll}>
                            Draw All 3
                        </button>
                    )}
                </>
            )}

            {!canShuffle && (
                <button className="btn btn-text animate-fade-in" onClick={onNewReading}>
                    New Reading
                </button>
            )}
        </div>
    );
};

export default Controls;
