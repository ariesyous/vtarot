import assert from "node:assert/strict";
import test from "node:test";
import { getCombinedReading } from "../src/data/combinedReading.js";
import { deck } from "../src/data/deck.js";

const tower = deck.find(card => card.name === "The Tower");
const nineOfCups = { ...deck.find(card => card.name === "Nine of Cups"), reversed: true };
const threeOfPentacles = deck.find(card => card.name === "Three of Pentacles");

test("connects an earlier upheaval and a present need to a practical collaboration", () => {
  const { interpretation, reflection } = getCombinedReading([tower, nineOfCups, threeOfPentacles]);

  assert.match(interpretation, /upheaval.*need behind an unfulfilling goal.*different skill or perspective/);
  assert.match(reflection, /different skills.*unfulfilling goal.*\?$/);
  assert.equal(reflection.match(/\?/g).length, 1);
});

test("reordering the same cards changes their roles and the reflection", () => {
  const original = getCombinedReading([tower, nineOfCups, threeOfPentacles]);
  const swappedPast = getCombinedReading([nineOfCups, tower, threeOfPentacles]);
  const swappedFuture = getCombinedReading([tower, threeOfPentacles, nineOfCups]);

  assert.notEqual(original.interpretation, swappedPast.interpretation);
  assert.notEqual(original.reflection, swappedPast.reflection);
  assert.match(swappedFuture.interpretation, /name the need underneath the outcome you hoped for/);
  assert.notEqual(original.reflection, swappedFuture.reflection);
});

test("every card's reversal changes the interpretation in each position", () => {
  for (const card of deck) {
    const [first, second] = deck.filter(other => other.id !== card.id);
    const placements = [
      [card, first, second],
      [first, card, second],
      [first, second, card],
    ];

    for (const [position, spread] of placements.entries()) {
      const reversed = spread.map(entry => entry === card ? { ...entry, reversed: true } : entry);
      const uprightReading = getCombinedReading(spread);
      const reversedReading = getCombinedReading(reversed);

      assert.notEqual(uprightReading.interpretation, reversedReading.interpretation, card.name);
      if (position > 0) {
        assert.notEqual(uprightReading.reflection, reversedReading.reflection, card.name);
      }
    }
  }
});
