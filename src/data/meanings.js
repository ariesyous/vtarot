// meanings.js
// A lightweight interpretation mapping for offline use

export const MAJOR_ARCANA_MEANINGS = {
    "The Fool": { upright: "New beginnings, innocence, spontaneity", reversed: "Recklessness, risk-taking, holding back" },
    "The Magician": { upright: "Manifestation, resourcefulness, power", reversed: "Manipulation, poor planning, untapped talents" },
    "The High Priestess": { upright: "Intuition, unconscious, inner voice", reversed: "Secrets, disconnected from intuition, hidden agendas" },
    "The Empress": { upright: "Femininity, beauty, nature, abundance", reversed: "Creative block, dependence on others" },
    "The Emperor": { upright: "Authority, establishment, structure", reversed: "Domination, excessive control, lack of discipline" },
    "The Hierophant": { upright: "Spiritual wisdom, religious beliefs, conformity", reversed: "Personal beliefs, freedom, challenging the status quo" },
    "The Lovers": { upright: "Love, harmony, relationships, values alignment", reversed: "Self-love, disharmony, imbalance, misalignment of values" },
    "The Chariot": { upright: "Control, willpower, success, action", reversed: "Self-discipline, opposition, lack of direction" },
    "Strength": { upright: "Strength, courage, persuasion, influence", reversed: "Inner strength, self-doubt, low energy, raw emotion" },
    "The Hermit": { upright: "Soul-searching, introspection, being alone", reversed: "Isolation, loneliness, withdrawal" },
    "Wheel of Fortune": { upright: "Good luck, karma, life cycles, destiny", reversed: "Bad luck, resistance to change, breaking cycles" },
    "Justice": { upright: "Justice, fairness, truth, cause and effect", reversed: "Unfairness, lack of accountability, dishonesty" },
    "The Hanged Man": { upright: "Pause, surrender, letting go, new perspectives", reversed: "Delays, resistance, stalling, indecision" },
    "Death": { upright: "Endings, change, transformation, transition", reversed: "Resistance to change, personal transformation, inner purging" },
    "Temperance": { upright: "Balance, moderation, patience, purpose", reversed: "Imbalance, excess, self-healing, re-alignment" },
    "The Devil": { upright: "Shadow self, attachment, addiction, restriction", reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment" },
    "The Tower": { upright: "Sudden change, upheaval, chaos, revelation", reversed: "Personal transformation, fear of change, averting disaster" },
    "The Star": { upright: "Hope, faith, purpose, renewal, spirituality", reversed: "Lack of faith, despair, self-trust, disconnection" },
    "The Moon": { upright: "Illusion, fear, anxiety, subconscious, intuition", reversed: "Release of fear, repressed emotion, inner confusion" },
    "The Sun": { upright: "Positivity, fun, warmth, success, vitality", reversed: "Inner child, feeling down, overly optimistic" },
    "Judgement": { upright: "Judgement, rebirth, inner calling, absolution", reversed: "Self-doubt, inner critic, ignoring the call" },
    "The World": { upright: "Completion, integration, accomplishment, travel", reversed: "Seeking personal closure, short-cuts, delays" }
};

const NUMBER_MEANINGS = {
    "Ace": { upright: "New beginnings, potential, inspiration", reversed: "Missed opportunities, delays, raw energy" },
    "Two": { upright: "Balance, choices, partnership", reversed: "Imbalance, disharmony, bad decisions" },
    "Three": { upright: "Creation, group work, growth", reversed: "Lack of teamwork, delays, poor execution" },
    "Four": { upright: "Stability, structure, foundation", reversed: "Instability, restrictiveness, feeling stuck" },
    "Five": { upright: "Conflict, change, expansion", reversed: "Avoiding conflict, feeling overwhelmed, moving on" },
    "Six": { upright: "Harmony, balance, cooperation", reversed: "Imbalance, lack of support, unequal situations" },
    "Seven": { upright: "Assessment, reflection, inner work", reversed: "Indecision, self-doubt, lack of clarity" },
    "Eight": { upright: "Mastery, action, movement", reversed: "Lack of action, running out of steam, stagnation" },
    "Nine": { upright: "Fruition, attainment, almost there", reversed: "Burnout, giving up, delays, stubbornness" },
    "Ten": { upright: "Completion, end of cycle, renewal", reversed: "Endings, starting over, avoiding the inevitable" },
    "Page": { upright: "Messages, beginnings, curiosity", reversed: "Poor communication, acting hastily, immaturity" },
    "Knight": { upright: "Action, adventure, focused energy", reversed: "Recklessness, haste, lack of direction" },
    "Queen": { upright: "Nurturing, maturity, mastering emotions", reversed: "Overly emotional, smothering, insecurity" },
    "King": { upright: "Authority, control, leadership", reversed: "Controlling, unyielding, lack of leadership" }
};

const SUIT_THEMES = {
    "Wands": "Creativity, passion, determination",
    "Cups": "Emotions, intuition, relationships",
    "Swords": "Thoughts, words, actions, conflict",
    "Pentacles": "Material world, nature, finances, career"
};

export const getMeaning = (card) => {
    if (card.type === "major") {
        // Exact mapping for Major Arcana
        const meanings = MAJOR_ARCANA_MEANINGS[card.name];
        if (meanings) {
            return card.reversed ? meanings.reversed : meanings.upright;
        }
    } else if (card.type === "minor") {
        // Generalized mapping for Minor Arcana based on Suit + Number
        // card.name format: "Three of Wands"
        const [faceName, , suitName] = card.name.split(" ");

        const faceMeaning = NUMBER_MEANINGS[faceName];
        const theme = SUIT_THEMES[suitName];

        if (faceMeaning && theme) {
            const baseMeaning = card.reversed ? faceMeaning.reversed : faceMeaning.upright;
            return `${baseMeaning} (Theme: ${theme})`;
        }
    }

    return "Meaning not found.";
};
