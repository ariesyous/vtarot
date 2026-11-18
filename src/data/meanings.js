// Each orientation has a meaning, a reflection theme, a thread, and a possible next step.
const CARD_MEANINGS = {
  "The Fool": {
    upright: [
      "A new experience invites curiosity before you have all the answers.",
      "taking a first step into the unknown", "change",
      "try one unfamiliar thing without committing to the whole path",
    ],
    reversed: [
      "Uncertainty can lead to rushing in or holding back. Consider which risk deserves a closer look.",
      "the risk of taking a leap too soon", "choice",
      "identify the part of the leap you can test before you commit",
    ],
  },
  "The Magician": {
    upright: [
      "Your skills and resources can turn an intention into something tangible.",
      "putting the tools you already have to use", "effort",
      "use a skill you already have on one concrete part of the task",
    ],
    reversed: [
      "Scattered effort can hide a skill you could put to better use.",
      "an ability you have been underusing", "effort",
      "choose one underused skill and give it your full attention",
    ],
  },
  "The High Priestess": {
    upright: [
      "A quiet pause can help you notice what your first impression missed.",
      "listening to a quiet intuition", "attention",
      "take a quiet moment to write down what you keep sensing",
    ],
    reversed: [
      "Outside opinions may be drowning out what you already sense.",
      "separating your intuition from other people's expectations", "choice",
      "write down your own first answer before asking for another opinion",
    ],
  },
  "The Empress": {
    upright: [
      "Care and creative attention give something the conditions it needs to grow.",
      "making room for something to grow", "support",
      "give one idea or relationship the time it needs to grow",
    ],
    reversed: [
      "Giving all your energy away can leave little for your own needs or creative work.",
      "the cost of caring for everyone else first", "limits",
      "set aside a little of the care you usually give away for yourself",
    ],
  },
  "The Emperor": {
    upright: [
      "A clear boundary or dependable structure can make an uncertain situation easier to navigate.",
      "a boundary that gives you stability", "stability",
      "choose one boundary or routine that would make the situation easier to navigate",
    ],
    reversed: [
      "A useful structure can become rigid when control matters more than the people it serves.",
      "the pressure to keep everything under control", "limits",
      "relax one rule whose cost now outweighs its purpose",
    ],
  },
  "The Hierophant": {
    upright: [
      "A trusted teacher, tradition, or community can offer a framework worth trying.",
      "advice from a tradition or mentor", "support",
      "ask someone you respect how they learned to handle a similar situation",
    ],
    reversed: [
      "A rule you inherited may need to be reconsidered in light of what you value now.",
      "an inherited rule you are ready to question", "choice",
      "name an inherited rule and decide whether it still serves you",
    ],
  },
  "The Lovers": {
    upright: [
      "A meaningful choice becomes clearer when your commitments reflect your values.",
      "a commitment that reflects what you value", "choice",
      "name the value you want this choice to reflect",
    ],
    reversed: [
      "A gap between what you value and what you agree to can strain a choice or relationship.",
      "a compromise that feels out of step with your values", "conflict",
      "say which compromise no longer fits the values you want to live by",
    ],
  },
  "The Chariot": {
    upright: [
      "Progress takes focus when competing priorities pull in different directions.",
      "choosing a direction amid competing demands", "effort",
      "choose one priority and give it a clear window of time",
    ],
    reversed: [
      "Pushing harder may scatter your energy when the destination itself is unclear.",
      "the urge to push ahead without a clear direction", "choice",
      "name your destination before putting more energy into the journey",
    ],
  },
  "Strength": {
    upright: [
      "Patience and gentleness can steady an impulse that force would only intensify.",
      "responding to a strong feeling with patience", "limits",
      "give yourself time to respond to a strong feeling with patience",
    ],
    reversed: [
      "Self-doubt or exhaustion can make it harder to respond with the care you would normally offer.",
      "self-doubt or exhaustion", "limits",
      "set one expectation at a level you can meet with the energy you have",
    ],
  },
  "The Hermit": {
    upright: [
      "Time away from other voices can bring a question of your own into focus.",
      "choosing solitude to hear yourself think", "attention",
      "take a short period alone to hear your own answer more clearly",
    ],
    reversed: [
      "Distance can stop feeling restorative when it keeps you from support or connection.",
      "the point where solitude begins to feel like isolation", "support",
      "reach out to one person whose company usually feels restorative",
    ],
  },
  "Wheel of Fortune": {
    upright: [
      "Circumstances change, and a turn outside your control can open a new possibility.",
      "a change in circumstances you couldn't plan for", "change",
      "notice which option has opened up because the circumstances shifted",
    ],
    reversed: [
      "A setback may reveal a pattern you keep meeting in a different form.",
      "a recurring pattern you would like to interrupt", "change",
      "identify the earliest point where you could interrupt a familiar pattern",
    ],
  },
  "Justice": {
    upright: [
      "A fair decision asks you to weigh the facts and take responsibility for its effects.",
      "taking responsibility for the consequences of a choice", "choice",
      "write down who is affected and what the fairest criteria would be",
    ],
    reversed: [
      "Look for a double standard or a part of the story that has been left out.",
      "a double standard that deserves another look", "conflict",
      "look for a perspective that was missing when the decision was made",
    ],
  },
  "The Hanged Man": {
    upright: [
      "A deliberate pause can reveal an option that effort alone hasn't uncovered.",
      "pausing long enough to see a different option", "attention",
      "pause long enough to describe the problem from a different viewpoint",
    ],
    reversed: [
      "Waiting may have become a way to postpone an uncomfortable decision.",
      "a delay that has outlasted its purpose", "choice",
      "set a time to revisit the decision you have been postponing",
    ],
  },
  "Death": {
    upright: [
      "An ending can make room for a new phase once you acknowledge what has run its course.",
      "letting a chapter of your life end", "change",
      "name one thing you can retire to make space for what comes next",
    ],
    reversed: [
      "Holding tightly to an old role or routine can make an ongoing change harder to accept.",
      "a familiar role that no longer fits", "change",
      "let go of one part of an old role that has already run its course",
    ],
  },
  "Temperance": {
    upright: [
      "Small adjustments can bring competing needs into a balance you can sustain.",
      "finding a sustainable balance between competing needs", "stability",
      "make a small adjustment you could sustain for a week",
    ],
    reversed: [
      "Swinging between extremes may be a sign that something needs a gentler pace.",
      "a habit of swinging between extremes", "limits",
      "choose a more sustainable middle pace for one demanding commitment",
    ],
  },
  "The Devil": {
    upright: [
      "A familiar attachment can narrow your choices, even when it offers comfort.",
      "a familiar attachment that makes your choices feel smaller", "limits",
      "notice when a familiar source of comfort starts narrowing your choices",
    ],
    reversed: [
      "Naming a hold something has on you can help you see where you have room to choose.",
      "recognizing a habit you have room to change", "change",
      "try changing one small part of the habit you want to loosen",
    ],
  },
  "The Tower": {
    upright: [
      "A disruption can expose the assumptions that were holding an unstable situation together.",
      "an upheaval that exposed a hidden problem", "change",
      "separate what the disruption revealed from what you actually need to rebuild",
    ],
    reversed: [
      "Anticipating a disruption can make it tempting to leave a fragile arrangement untouched.",
      "a fragile arrangement you are reluctant to disturb", "stability",
      "identify one fragile part of the arrangement you can address while you have room",
    ],
  },
  "The Star": {
    upright: [
      "A modest source of hope can help you rebuild after a difficult stretch.",
      "a small source of hope after a setback", "change",
      "put a little time into one thing that makes recovery feel possible",
    ],
    reversed: [
      "Discouragement may be making quiet signs of progress hard to see.",
      "a small sign of progress you might be overlooking", "attention",
      "record one small sign of progress that discouragement nearly hid",
    ],
  },
  "The Moon": {
    upright: [
      "When the picture is incomplete, fear and intuition can be difficult to tell apart.",
      "making sense of uncertainty before you act", "attention",
      "separate what you know from what you fear before you act",
    ],
    reversed: [
      "A fear may lose some of its power as its source comes into clearer view.",
      "a fear that changes when you can name it", "attention",
      "put a name to the fear and notice what feels clearer once you do",
    ],
  },
  "The Sun": {
    upright: [
      "Clarity and uncomplicated enjoyment can give you energy worth noticing.",
      "a source of simple enjoyment", "attention",
      "make time for something you enjoy without needing it to accomplish anything",
    ],
    reversed: [
      "Pressure to feel cheerful can make it harder to notice what genuinely lifts your mood.",
      "making space for joy without forcing it", "limits",
      "leave space for something pleasant without making cheerfulness a requirement",
    ],
  },
  "Judgement": {
    upright: [
      "A clear look at earlier decisions can help you choose what to answer for and what to begin again.",
      "learning from an earlier decision", "choice",
      "write down what an earlier choice taught you and what you would do differently",
    ],
    reversed: [
      "An unforgiving inner critic can drown out the lesson an honest review might offer.",
      "the difference between accountability and self-criticism", "attention",
      "describe what you learned from a mistake as plainly as you would to a friend",
    ],
  },
  "The World": {
    upright: [
      "A completed cycle gives you a chance to recognize what you have learned and bring it forward.",
      "acknowledging what you have completed", "change",
      "name something you have completed and one lesson you want to take forward",
    ],
    reversed: [
      "One loose end may be keeping a finished chapter from feeling complete.",
      "a loose end that keeps a chapter open", "stability",
      "choose one loose end that would make the chapter feel closed",
    ],
  },
  "Ace of Wands": {
    upright: [
      "A spark of enthusiasm is worth trying out while the idea still feels alive.",
      "an idea you are excited to try", "effort",
      "take a short first pass at the idea while it still excites you",
    ],
    reversed: [
      "A new idea may need rest, time, or a smaller first experiment before it catches.",
      "a creative idea that has been slow to catch", "effort",
      "shrink the first experiment until the idea feels approachable",
    ],
  },
  "Two of Wands": {
    upright: [
      "From a secure starting point, you can decide how far you want to venture.",
      "planning beyond what already feels familiar", "choice",
      "compare the familiar route with one option that takes you a little further",
    ],
    reversed: [
      "A comfortable plan may feel safe while keeping a meaningful possibility out of reach.",
      "the pull of a familiar plan", "choice",
      "look at what the safer plan would also keep out of reach",
    ],
  },
  "Three of Wands": {
    upright: [
      "An effort you have already set in motion can teach you where to look next.",
      "waiting to see where an early effort leads", "effort",
      "look at what your early effort has revealed before choosing where to expand",
    ],
    reversed: [
      "A delay may invite you to shorten your horizon and act on what is within reach.",
      "adjusting a plan when progress is delayed", "effort",
      "choose a piece of the delayed plan you can still move forward today",
    ],
  },
  "Four of Wands": {
    upright: [
      "A shared milestone deserves a moment of celebration and belonging.",
      "celebrating a milestone with people who helped you reach it", "support",
      "mark the milestone with someone who helped you reach it",
    ],
    reversed: [
      "A celebration or homecoming may feel unsettled if the sense of belonging is missing.",
      "what would make a place feel more welcoming", "support",
      "ask what would make the gathering or shared space feel more welcoming",
    ],
  },
  "Five of Wands": {
    upright: [
      "Competing ideas can sharpen a plan when everyone has room to be heard.",
      "learning from a disagreement", "conflict",
      "give a competing idea enough room to show what it could improve",
    ],
    reversed: [
      "A quarrel can keep taking energy after it has stopped yielding anything useful.",
      "stepping back from an unproductive quarrel", "limits",
      "step away from one exchange that has stopped being productive",
    ],
  },
  "Six of Wands": {
    upright: [
      "Recognition can mark real progress and remind you who helped make it possible.",
      "receiving recognition for work you care about", "support",
      "share a win with someone whose help made it possible",
    ],
    reversed: [
      "A lack of applause can prompt you to choose your own measure of success.",
      "a measure of success that doesn't depend on approval", "attention",
      "choose a measure of progress that does not depend on being praised",
    ],
  },
  "Seven of Wands": {
    upright: [
      "A position you care about may need a clear and deliberate defense.",
      "standing up for something you care about", "conflict",
      "state the position you want to defend in one clear sentence",
    ],
    reversed: [
      "Defending every boundary at once can leave little energy for the one that matters most.",
      "choosing which battles deserve your effort", "limits",
      "pick the one boundary that deserves your energy today",
    ],
  },
  "Eight of Wands": {
    upright: [
      "When messages and opportunities arrive quickly, a timely response can carry things forward.",
      "timing your response", "effort",
      "answer the message or opportunity that would actually move things forward",
    ],
    reversed: [
      "Crossed messages or a rushed decision can complicate something that needs a moment of coordination.",
      "slowing down enough to clear up a misunderstanding", "choice",
      "check that everyone understood the plan before moving faster",
    ],
  },
  "Nine of Wands": {
    upright: [
      "Experience can help you protect your remaining energy while you finish what is close to done.",
      "saving enough energy to see something through", "limits",
      "budget your remaining energy for the work that is closest to done",
    ],
    reversed: [
      "Expecting another setback can keep you braced long after the situation has changed.",
      "lowering your guard where it is safe to do so", "attention",
      "look for one place where you can lower your guard without exposing yourself to harm",
    ],
  },
  "Ten of Wands": {
    upright: [
      "A worthwhile commitment can still become too heavy to carry on your own.",
      "a responsibility you could share", "limits",
      "ask someone to take on one specific part of a heavy responsibility",
    ],
    reversed: [
      "Setting down an obligation can make space for the work you actually need to finish.",
      "an obligation you could set down", "limits",
      "set down one obligation that is crowding out the work you need to finish",
    ],
  },
  "Page of Wands": {
    upright: [
      "Curiosity can be enough reason to try something before you know where it will lead.",
      "following an interest without needing a plan for it", "effort",
      "give a curiosity an afternoon without asking it to become a plan",
    ],
    reversed: [
      "Chasing the next interesting idea can keep you from discovering what the current one could become.",
      "staying with an idea after the initial excitement fades", "effort",
      "return to one promising idea and see what comes after the initial excitement",
    ],
  },
  "Knight of Wands": {
    upright: [
      "Energy and daring can get you moving. Give that momentum a destination you want to reach.",
      "putting bold energy behind a deliberate choice", "effort",
      "give your enthusiasm one clear task before starting something else",
    ],
    reversed: [
      "A quick start can create extra work if enthusiasm sends you in several directions at once.",
      "the difference between acting boldly and acting impulsively", "limits",
      "pause before a quick commitment and decide where the energy belongs",
    ],
  },
  "Queen of Wands": {
    upright: [
      "Owning what excites you can give others permission to show up with confidence too.",
      "letting people see what genuinely excites you", "effort",
      "share one interest openly and see what it invites from others",
    ],
    reversed: [
      "Comparing yourself to others can make it harder to follow the interests that feel like your own.",
      "creative confidence that doesn't depend on comparison", "attention",
      "spend a little time on the work you would choose without comparing yourself to anyone",
    ],
  },
  "King of Wands": {
    upright: [
      "A clear vision can rally people when you give them room to shape how it happens.",
      "sharing a vision without controlling every detail", "support",
      "share the goal and let someone else choose how to tackle their part",
    ],
    reversed: [
      "A strong vision can turn into impatience when other people need time to find their role.",
      "impatience with people who need time to find their role", "support",
      "ask what time or context someone needs before you ask them to move faster",
    ],
  },
  "Ace of Cups": {
    upright: [
      "A new feeling or connection can be met with curiosity before you decide what it means.",
      "opening up to a new feeling", "attention",
      "give a new feeling a name and some time before deciding what it means",
    ],
    reversed: [
      "A feeling you have held back may need a private or safer place to be expressed.",
      "finding a safe place for a feeling you have held back", "limits",
      "give the feeling a private place to be expressed at your own pace",
    ],
  },
  "Two of Cups": {
    upright: [
      "Mutual attention and honest exchange can deepen a connection between equals.",
      "a connection where care goes both ways", "support",
      "make time for an exchange where both people get to speak and be heard",
    ],
    reversed: [
      "A mismatch in effort or expectations may need to be named before a bond can feel mutual again.",
      "an unspoken imbalance in a relationship", "conflict",
      "name one difference in effort or expectations that has gone unspoken",
    ],
  },
  "Three of Cups": {
    upright: [
      "Friendship and shared celebration can make an ordinary moment feel sustaining.",
      "being supported by friends or community", "support",
      "make one simple plan with people who help you feel supported",
    ],
    reversed: [
      "A group you enjoy may be asking for more social energy than you have to give right now.",
      "choosing how much social energy you can give", "limits",
      "choose a social commitment that fits your energy this week",
    ],
  },
  "Four of Cups": {
    upright: [
      "Disinterest may be asking for rest, or for a closer look at an offer you have overlooked.",
      "an opportunity you might have dismissed too quickly", "attention",
      "give an overlooked invitation a second look after you have had a chance to rest",
    ],
    reversed: [
      "After time withdrawn, a small invitation may feel worth accepting again.",
      "reconnecting after a period of withdrawal", "change",
      "accept one small invitation that feels manageable now",
    ],
  },
  "Five of Cups": {
    upright: [
      "Disappointment deserves attention alongside the support or possibilities that remain.",
      "making room for both loss and what remains", "attention",
      "name what disappointed you and notice one source of support that remains",
    ],
    reversed: [
      "Making peace with a disappointment can free attention for something still available to you.",
      "a source of support that remains after a loss", "change",
      "put a little attention toward something still available after the loss",
    ],
  },
  "Six of Cups": {
    upright: [
      "A memory or familiar kindness can remind you of something you still need.",
      "a small kindness you remember from earlier in life", "attention",
      "bring one small kindness from an earlier time into the life you have now",
    ],
    reversed: [
      "A fond memory can become limiting if you judge every new experience against it.",
      "an old memory that colors a current choice", "change",
      "give one new experience room to differ from a memory you cherish",
    ],
  },
  "Seven of Cups": {
    upright: [
      "Several possibilities can look appealing from a distance. Looking closely can reveal which one is real for you.",
      "distinguishing a real option from an appealing fantasy", "choice",
      "check what pursuing one appealing option would actually ask of you",
    ],
    reversed: [
      "Narrowing your options can free energy for a choice you can actually make.",
      "choosing one possibility to pursue", "choice",
      "set a few options aside and give one realistic possibility a trial",
    ],
  },
  "Eight of Cups": {
    upright: [
      "It can be time to leave something you have invested in when it no longer meets an important need.",
      "walking away from something that once mattered", "change",
      "name the need that no longer feels met and explore one way to meet it elsewhere",
    ],
    reversed: [
      "Staying and leaving can both feel costly when the familiar has stopped sustaining you.",
      "the cost of staying in a familiar situation", "choice",
      "write down what it costs you to stay and what it would cost to leave",
    ],
  },
  "Nine of Cups": {
    upright: [
      "Pause long enough to enjoy what you hoped for or worked to create.",
      "allowing yourself to enjoy what has gone well", "attention",
      "pause long enough to enjoy one thing you worked to create",
    ],
    reversed: [
      "Getting what you wanted can reveal a different need underneath the original wish.",
      "the need behind an unfulfilling goal", "choice",
      "name the need underneath the outcome you hoped for",
    ],
  },
  "Ten of Cups": {
    upright: [
      "A shared sense of home grows from the ways people care for one another in everyday life.",
      "an everyday practice that helps people feel at home", "support",
      "repeat one ordinary act of care that helps your people feel at home",
    ],
    reversed: [
      "An ideal picture of home or family can obscure what the people involved actually need.",
      "an expectation about home or family that deserves another look", "support",
      "ask someone what would help them feel at home in practice",
    ],
  },
  "Page of Cups": {
    upright: [
      "A small gesture, dream, or unexpected feeling can invite a more imaginative response.",
      "a feeling that caught you by surprise", "attention",
      "give an unexpected feeling a low-pressure way to be explored",
    ],
    reversed: [
      "Fear of being judged can keep a tender feeling or idea from being shared.",
      "an idea or feeling you want to share carefully", "support",
      "share a tender idea with someone who has earned your trust",
    ],
  },
  "Knight of Cups": {
    upright: [
      "An invitation or heartfelt gesture can give a feeling a clear direction.",
      "acting deliberately on something you feel strongly about", "effort",
      "turn a feeling you care about into one deliberate gesture",
    ],
    reversed: [
      "A compelling gesture may need steady follow-through to live up to what it promises.",
      "whether a promise is supported by actions", "stability",
      "check whether there is a concrete action behind the promise",
    ],
  },
  "Queen of Cups": {
    upright: [
      "Attentive listening can hold another person's feelings while leaving room for your own.",
      "listening with care while keeping track of your own feelings", "support",
      "listen to someone while taking a moment to check in with your own feelings",
    ],
    reversed: [
      "Taking on another person's emotions can make your own needs harder to recognize.",
      "a boundary that would protect your emotional energy", "limits",
      "choose a boundary that leaves some emotional energy for yourself",
    ],
  },
  "King of Cups": {
    upright: [
      "A steady response can honor a strong feeling while giving you time to choose what to do.",
      "staying steady while a strong feeling passes through", "attention",
      "give a strong feeling time to pass through before choosing a response",
    ],
    reversed: [
      "Keeping every emotion contained can turn composure into distance or pressure.",
      "acknowledging a feeling before deciding how to respond", "attention",
      "acknowledge one feeling before deciding what to do with it",
    ],
  },
  "Ace of Swords": {
    upright: [
      "A clear thought or honest conversation can help you name the issue at the center of a situation.",
      "a new insight into the real issue", "choice",
      "put the central issue into one clear sentence you could share",
    ],
    reversed: [
      "Confusion may call for a better question before you settle on an answer.",
      "checking the assumptions behind a conclusion", "choice",
      "ask what would need to be true for your conclusion to hold",
    ],
  },
  "Two of Swords": {
    upright: [
      "A decision can stay suspended while two options feel equally difficult to face.",
      "a decision you have been putting off", "choice",
      "give each option a fair look and name what makes it hard to face",
    ],
    reversed: [
      "Putting a decision off can become more costly than choosing with imperfect information.",
      "a choice that has become harder to postpone", "choice",
      "set a deadline for a decision you can make with the information available",
    ],
  },
  "Three of Swords": {
    upright: [
      "Naming a painful truth can give hurt the attention it needs.",
      "a painful truth that needed to be spoken", "conflict",
      "put a painful truth into words in a setting where you can handle it gently",
    ],
    reversed: [
      "Healing can begin with a small release of a story you have been repeating about the hurt.",
      "a painful story you are beginning to let go of", "change",
      "notice one part of the story about the hurt you no longer need to carry",
    ],
  },
  "Four of Swords": {
    upright: [
      "Rest can give your mind time to settle before you return to a demanding situation.",
      "taking a deliberate break after a demanding stretch", "limits",
      "set aside a deliberate interval for rest before returning to the decision",
    ],
    reversed: [
      "Restlessness may signal that you are recovering slowly or that a period of retreat is ready to end.",
      "finding the right pace for returning after a break", "limits",
      "choose the smallest useful task for your return",
    ],
  },
  "Five of Swords": {
    upright: [
      "Getting the last word can carry a cost for trust that outlasts the argument.",
      "a disagreement where winning came at a cost", "conflict",
      "notice what it would cost the relationship to keep pushing for the last word",
    ],
    reversed: [
      "There may be a way to step out of a conflict or acknowledge harm without reopening every point.",
      "a conflict you would rather resolve than prolong", "conflict",
      "take one step toward repair without reopening the whole argument",
    ],
  },
  "Six of Swords": {
    upright: [
      "Moving toward calmer ground can help even if you bring some of the old worries with you.",
      "a transition away from a difficult situation", "change",
      "choose a manageable step toward calmer conditions",
    ],
    reversed: [
      "A change of scenery may help only so far if an unresolved concern keeps traveling with you.",
      "an unresolved concern you keep carrying forward", "change",
      "name a concern that needs attention alongside the change of scenery",
    ],
  },
  "Seven of Swords": {
    upright: [
      "A discreet strategy can help you act independently. Consider who may be affected by what you keep to yourself.",
      "a decision about what to keep private", "choice",
      "decide what needs to stay private and what another person should know",
    ],
    reversed: [
      "Keeping something hidden can take more energy than addressing it directly.",
      "something that would be easier to carry if it were out in the open", "conflict",
      "consider who needs to hear what has been difficult to say",
    ],
  },
  "Eight of Swords": {
    upright: [
      "Some of what feels impossible may come from assumptions you haven't had a chance to test.",
      "a limit you have assumed without testing", "choice",
      "test one assumption that has been making your options feel smaller",
    ],
    reversed: [
      "Questioning an old constraint can uncover one practical move you were overlooking.",
      "an option that becomes visible when you question an old rule", "change",
      "try the first option that appears when you question the old rule",
    ],
  },
  "Nine of Swords": {
    upright: [
      "A worry can feel more convincing after you have been turning it over alone for a long time.",
      "a worry that grows when you keep it to yourself", "attention",
      "get a persistent worry out of your head and onto paper",
    ],
    reversed: [
      "Writing down or sharing a persistent worry can help you see its size more clearly.",
      "putting a persistent worry into words", "support",
      "share one specific worry with someone who can listen without rushing you",
    ],
  },
  "Ten of Swords": {
    upright: [
      "Recognizing that something has ended can give you space to stop trying to rescue it.",
      "an ending you need time to acknowledge", "change",
      "let one attempt to rescue what has ended come to a close",
    ],
    reversed: [
      "After a difficult ending, recovery can start with an ordinary step that is within reach.",
      "the first manageable step after a difficult ending", "change",
      "choose one ordinary task that would make the next day easier",
    ],
  },
  "Page of Swords": {
    upright: [
      "A sharp question can reveal more than a quick opinion when you are willing to listen to the answer.",
      "a question you would like to ask before forming an opinion", "attention",
      "ask one honest question and give the answer your full attention",
    ],
    reversed: [
      "Speculation can get ahead of the facts when there is pressure to respond quickly.",
      "a claim you could verify before passing it along", "choice",
      "verify the part of the claim you would be most likely to repeat",
    ],
  },
  "Knight of Swords": {
    upright: [
      "Decisive action can cut through delay when the goal and its consequences are clear.",
      "acting quickly after you have checked what is at stake", "effort",
      "take the decisive step once you can name who and what it affects",
    ],
    reversed: [
      "Speed can turn determination into avoidable friction when other people need time or context.",
      "a moment when slowing down could make you more effective", "limits",
      "give the people affected enough time or context to respond",
    ],
  },
  "Queen of Swords": {
    upright: [
      "Clear language and firm boundaries can make a difficult exchange fairer for everyone.",
      "stating a boundary clearly and with care", "choice",
      "put the boundary into language that is both clear and fair",
    ],
    reversed: [
      "A sharp reply can protect you in the moment while making an honest conversation harder later.",
      "saying something difficult without making it harsher than necessary", "conflict",
      "choose a way to say the difficult part without adding unnecessary blame",
    ],
  },
  "King of Swords": {
    upright: [
      "A reasoned decision can hold up under scrutiny when you make the criteria clear.",
      "a decision you can explain with clear reasons", "choice",
      "share the reasoning and criteria behind the decision",
    ],
    reversed: [
      "Reasoning can become selective when it serves a conclusion you have already chosen.",
      "looking for evidence that could change your mind", "attention",
      "look for one piece of evidence that could change your mind",
    ],
  },
  "Ace of Pentacles": {
    upright: [
      "A practical opportunity can become more substantial if you take one concrete step to develop it.",
      "a modest opportunity you can build on", "stability",
      "take one practical step that makes the opportunity easier to develop",
    ],
    reversed: [
      "A promising offer may need workable terms, resources, or timing before you take it on.",
      "checking whether an opportunity is practical right now", "stability",
      "check which resource or term must be in place for the offer to work",
    ],
  },
  "Two of Pentacles": {
    upright: [
      "Flexibility can help you juggle commitments while conditions keep changing.",
      "adjusting how you balance everyday commitments", "stability",
      "reorder one commitment to fit the conditions you have today",
    ],
    reversed: [
      "Keeping too many obligations moving can be a signal to set one down, even temporarily.",
      "one commitment you could pause to make room for another", "limits",
      "pause one obligation to give another the attention it needs",
    ],
  },
  "Three of Pentacles": {
    upright: [
      "A shared project improves when different skills meet clear feedback and a common goal.",
      "working with someone who brings different skills", "support",
      "ask someone with a different skill or perspective to help you test one practical step",
    ],
    reversed: [
      "Unclear roles or expectations can make skilled people work at cross purposes.",
      "a role that needs to be clarified in a shared project", "support",
      "agree on one role or expectation before the group does more work",
    ],
  },
  "Four of Pentacles": {
    upright: [
      "Protecting what you have can offer stability. Notice what it costs to keep a tight grip.",
      "the balance between security and flexibility", "stability",
      "check what you gain and what you give up by holding on tightly",
    ],
    reversed: [
      "A resource you have been protecting may now be more useful if you spend, share, or release it.",
      "a resource you could afford to loosen your grip on", "change",
      "release or share a small part of a resource you have been guarding",
    ],
  },
  "Five of Pentacles": {
    upright: [
      "A difficult stretch can make available support hard to see or hard to ask for.",
      "reaching for support during a difficult stretch", "limits",
      "name one practical kind of support it would help to ask for",
    ],
    reversed: [
      "Accepting a practical offer can begin to ease a situation you have been carrying alone.",
      "a practical offer of help", "support",
      "accept a specific offer of help with something you have been carrying alone",
    ],
  },
  "Six of Pentacles": {
    upright: [
      "Giving and receiving can strengthen a relationship when the terms respect both people.",
      "help that leaves the recipient room to choose", "support",
      "ask what kind of help would let the other person keep a say in the outcome",
    ],
    reversed: [
      "Generosity can create pressure if it comes with an unspoken debt or expectation.",
      "an unspoken condition attached to help", "conflict",
      "name a condition that may be hiding inside an offer of help",
    ],
  },
  "Seven of Pentacles": {
    upright: [
      "Pausing to assess slow progress can help you decide whether to keep tending it.",
      "deciding if a slow investment still deserves your time", "stability",
      "check what the time you invested has produced so far",
    ],
    reversed: [
      "Time already spent can make it hard to recognize when a method needs to change.",
      "a method you keep using because you have already invested in it", "choice",
      "compare the cost of the current method with a small trial of a new one",
    ],
  },
  "Eight of Pentacles": {
    upright: [
      "Paying close attention to a small part of your practice can improve the whole craft over time.",
      "a skill you could improve through deliberate practice", "effort",
      "practice one part of the skill and pay attention to what improves",
    ],
    reversed: [
      "Repetition can become mechanical when you lose sight of the skill you meant to develop.",
      "a routine that needs a clearer purpose", "effort",
      "choose a concrete skill to develop the next time you repeat the routine",
    ],
  },
  "Nine of Pentacles": {
    upright: [
      "Enjoying the independence you have earned can help you recognize what made it possible.",
      "enjoying the results of your own effort", "stability",
      "make time to enjoy something your own effort made possible",
    ],
    reversed: [
      "The push to appear self-sufficient can obscure the support or rest that would make life more sustainable.",
      "the pressure to prove you can manage everything yourself", "support",
      "let someone share a task you have been managing alone",
    ],
  },
  "Ten of Pentacles": {
    upright: [
      "Long-term security can come from the knowledge, resources, and care people pass to one another.",
      "something valuable you have inherited or could pass on", "stability",
      "preserve a skill or resource that could make life easier for someone after you",
    ],
    reversed: [
      "Inherited expectations about success or security may be hard to fit around the life you want.",
      "an inherited expectation about what security should look like", "choice",
      "define security in terms that fit the life you actually want",
    ],
  },
  "Page of Pentacles": {
    upright: [
      "A specific practice session or modest experiment can make an ambition feel more real.",
      "turning an ambition into a small learning goal", "effort",
      "turn one ambition into a practice session you can put on the calendar",
    ],
    reversed: [
      "A plan can remain abstract if the first task is too large or poorly defined.",
      "giving an unfinished plan a manageable first task", "effort",
      "break the unfinished plan into a task you can start today",
    ],
  },
  "Knight of Pentacles": {
    upright: [
      "A steady routine can carry an important commitment through periods when motivation is low.",
      "a routine that helps you keep a promise", "stability",
      "choose a routine you can keep on a low-energy day",
    ],
    reversed: [
      "A dependable routine can become inertia when it keeps you from trying a needed adjustment.",
      "a routine you have outgrown", "change",
      "change one part of the routine and see what happens",
    ],
  },
  "Queen of Pentacles": {
    upright: [
      "Practical care can give you and the people around you a more comfortable place to stand.",
      "a tangible act of care that makes daily life easier", "support",
      "do one tangible thing that would make daily life easier for someone",
    ],
    reversed: [
      "The work of keeping things running may need to be shared when it crowds out your own basic needs.",
      "sharing the practical work of looking after others", "limits",
      "ask someone to share one task that has been crowding out your own needs",
    ],
  },
  "King of Pentacles": {
    upright: [
      "Resources built over time can support others when you manage them with a long view.",
      "using something you have built to support a lasting goal", "stability",
      "put one resource you already have behind a goal that will last",
    ],
    reversed: [
      "Preserving comfort or status can become costly if it leaves you unwilling to make a necessary change.",
      "a form of security that may be keeping you stuck", "change",
      "see what a small change would cost before ruling it out to protect your comfort",
    ],
  },
};

export function getCardInterpretation(card) {
  const orientation = card.reversed ? "reversed" : "upright";
  const [meaning, theme, thread, nextStep] = CARD_MEANINGS[card.name][orientation];
  return { meaning, theme, thread, nextStep };
}
