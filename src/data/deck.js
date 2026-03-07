export const MAJOR_ARCANA = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"
];

export const SUITS = [
  { name: "Wands", prefix: "wands" },
  { name: "Cups", prefix: "cups" },
  { name: "Swords", prefix: "swords" },
  { name: "Pentacles", prefix: "pents" }
];

const getMinorImageStr = (index) => {
  const num = index + 1;
  return num < 10 ? `0${num}` : `${num}`;
};

export const MINOR_FACES = [
  "Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
  "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"
];

export const getDeck = () => {
  const cards = [];
  let id = 0;

  // Add Major Arcana
  MAJOR_ARCANA.forEach((name, value) => {
    cards.push({
      id: id++,
      name,
      type: "major",
      value,
      suit: null,
      image: `./cards/maj${value.toString().padStart(2, '0')}.jpg`
    });
  });

  // Add Minor Arcana
  SUITS.forEach(suit => {
    MINOR_FACES.forEach((face, index) => {
      cards.push({
        id: id++,
        name: `${face} of ${suit.name}`,
        type: "minor",
        value: index + 1,
        suit: suit.name,
        image: `./cards/${suit.prefix}${getMinorImageStr(index)}.jpg`
      });
    });
  });

  return cards;
};

export const deck = getDeck();
