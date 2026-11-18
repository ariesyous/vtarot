import { getCardInterpretation } from "./meanings.js";

const THREADS = {
  change: "adapting to change",
  choice: "making a clear choice",
  effort: "where you put your energy",
  attention: "paying closer attention",
  support: "finding and offering support",
  limits: "personal limits",
  stability: "building something sustainable",
  conflict: "handling tension",
};

const PAST_CONNECTIONS = {
  change: {
    choice: (past, present) => `Looking back at ${past} can clarify what you want now. Consider ${present} in light of what that experience taught you.`,
    stability: (past, present) => `Look at what ${past} taught you about what holds up under pressure. That may help you decide what you want from ${present} now.`,
  },
  conflict: {
    choice: (past, present) => `An earlier experience with ${past} may explain why some options feel easier to consider than others. Keep that in mind as you think about ${present}.`,
    support: (past, present) => `What you learned from ${past} can affect how much trust you bring to ${present}. Give yourself room to see what has changed between then and now.`,
  },
  effort: {
    attention: (past, present) => `Take a cue from what happened when you put energy into ${past}. It may help you notice what has been easy to miss about ${present}.`,
    limits: (past, present) => `Look at what it took to follow through on ${past}. That experience can help you decide how much room you have for ${present} now.`,
  },
  limits: {
    attention: (past, present) => `What you learned about ${past} can help you give ${present} some attention today, at a pace that works for you.`,
    effort: (past, present) => `Let what you learned about ${past} set the pace as you consider ${present}. A first step can be sized to the energy you actually have.`,
  },
  support: {
    choice: (past, present) => `Think back to what ${past} helped you see. You can bring that perspective to ${present} and decide what needs to be said now.`,
    limits: (past, present) => `Think about what ${past} involved on both sides. It can help you recognize where ${present} is asking for a clearer boundary or a fairer share today.`,
  },
};

const FUTURE_CONNECTIONS = {
  attention: {
    effort: "A short experiment can show whether what you are noticing deserves more time.",
    limits: "Giving that insight room may mean doing less somewhere else.",
  },
  change: {
    stability: "Look for one practical thing you can rely on while the bigger picture is still shifting.",
    support: "Another person may see options that are hard to spot in the middle of a change.",
  },
  choice: {
    attention: "A closer look may reveal a detail that changes which option makes sense.",
    effort: "Once the choice is clearer, use what you know to make one concrete move.",
    limits: "What you can realistically take on belongs in the decision.",
    support: "A conversation can help you test whether the answer you have in mind fits what you need.",
  },
  conflict: {
    attention: "Make room to notice what the disagreement is bringing up before you respond.",
    limits: "Choose how much of the tension is yours to resolve.",
    support: "Consider what makes it possible for the people involved to work together again.",
  },
  effort: {
    attention: "Take a moment to see what your effort has changed before deciding where to put more of it.",
    stability: "Use the momentum to set up something you can sustain on an ordinary day.",
  },
  limits: {
    change: "A modest adjustment can keep an old demand from taking over again.",
    support: "Some of the pressure may ease when the work is shared more explicitly.",
  },
  stability: {
    change: "The structure you already have may give you enough footing to try a limited change.",
  },
  support: {
    attention: "Notice how people are responding before you decide what the situation needs from you.",
    limits: "Protect the time or energy that makes it possible to keep showing up.",
  },
};

function connectPastToPresent(past, present) {
  if (past.thread === present.thread) {
    return `Both the past and present touch on ${THREADS[present.thread]}. Consider how your experience of ${past.theme} informs the way you approach ${present.theme} now.`;
  }

  const connect = PAST_CONNECTIONS[past.thread]?.[present.thread];
  if (connect) return connect(past.theme, present.theme);

  return `Think back to ${past.theme}. Consider what that experience brings into focus about ${present.theme} today.`;
}

export function getCombinedReading(cards) {
  const [past, present, future] = cards.map(getCardInterpretation);
  const carryover = connectPastToPresent(past, present);
  const nextConnection = present.thread === future.thread
    ? `There is a chance to put what you are learning about ${THREADS[present.thread]} into practice.`
    : FUTURE_CONNECTIONS[present.thread]?.[future.thread];
  const nextStep = `You could ${future.nextStep}.`;
  const interpretation = [carryover, nextConnection, nextStep].filter(Boolean).join(" ");
  const reflection = `How could ${future.theme} change the way you see ${present.theme}?`;

  return { interpretation, reflection };
}
