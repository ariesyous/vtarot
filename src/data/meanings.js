const CARD_MEANINGS = {
  "The Fool": {
    upright: ["A new experience invites curiosity before you have all the answers.", "taking a first step into the unknown"],
    reversed: ["Uncertainty can lead to rushing in or holding back. Consider which risk deserves a closer look.", "the risk of taking a leap too soon"],
  },
  "The Magician": {
    upright: ["Your skills and resources can turn an intention into something tangible.", "putting the tools you already have to use"],
    reversed: ["Scattered effort can hide a skill you could put to better use.", "an ability you have been underusing"],
  },
  "The High Priestess": {
    upright: ["A quiet pause can help you notice what your first impression missed.", "listening to a quiet intuition"],
    reversed: ["Outside opinions may be drowning out what you already sense.", "separating your intuition from other people's expectations"],
  },
  "The Empress": {
    upright: ["Care and creative attention give something the conditions it needs to grow.", "making room for something to grow"],
    reversed: ["Giving all your energy away can leave little for your own needs or creative work.", "the cost of caring for everyone else first"],
  },
  "The Emperor": {
    upright: ["A clear boundary or dependable structure can make an uncertain situation easier to navigate.", "a boundary that gives you stability"],
    reversed: ["A useful structure can become rigid when control matters more than the people it serves.", "the pressure to keep everything under control"],
  },
  "The Hierophant": {
    upright: ["A trusted teacher, tradition, or community can offer a framework worth trying.", "advice from a tradition or mentor"],
    reversed: ["A rule you inherited may need to be reconsidered in light of what you value now.", "an inherited rule you are ready to question"],
  },
  "The Lovers": {
    upright: ["A meaningful choice becomes clearer when your commitments reflect your values.", "a commitment that reflects what you value"],
    reversed: ["A gap between what you value and what you agree to can strain a choice or relationship.", "a compromise that feels out of step with your values"],
  },
  "The Chariot": {
    upright: ["Progress takes focus when competing priorities pull in different directions.", "choosing a direction amid competing demands"],
    reversed: ["Pushing harder may scatter your energy when the destination itself is unclear.", "the urge to push ahead without a clear direction"],
  },
  "Strength": {
    upright: ["Patience and gentleness can steady an impulse that force would only intensify.", "responding to a strong feeling with patience"],
    reversed: ["Self-doubt or exhaustion can make it harder to respond with the care you would normally offer.", "being kind to yourself when confidence runs low"],
  },
  "The Hermit": {
    upright: ["Time away from other voices can bring a question of your own into focus.", "choosing solitude to hear yourself think"],
    reversed: ["Distance can stop feeling restorative when it keeps you from support or connection.", "the point where solitude begins to feel like isolation"],
  },
  "Wheel of Fortune": {
    upright: ["Circumstances change, and a turn outside your control can open a new possibility.", "a change in circumstances you couldn't plan for"],
    reversed: ["A setback may reveal a pattern you keep meeting in a different form.", "a recurring pattern you would like to interrupt"],
  },
  "Justice": {
    upright: ["A fair decision asks you to weigh the facts and take responsibility for its effects.", "taking responsibility for the consequences of a choice"],
    reversed: ["Look for a double standard or a part of the story that has been left out.", "a double standard that deserves another look"],
  },
  "The Hanged Man": {
    upright: ["A deliberate pause can reveal an option that effort alone hasn't uncovered.", "pausing long enough to see a different option"],
    reversed: ["Waiting may have become a way to postpone an uncomfortable decision.", "a delay that has outlasted its purpose"],
  },
  "Death": {
    upright: ["An ending can make room for a new phase once you acknowledge what has run its course.", "letting a chapter of your life end"],
    reversed: ["Holding tightly to an old role or routine can make an ongoing change harder to accept.", "a familiar role that no longer fits"],
  },
  "Temperance": {
    upright: ["Small adjustments can bring competing needs into a balance you can sustain.", "finding a sustainable balance between competing needs"],
    reversed: ["Swinging between extremes may be a sign that something needs a gentler pace.", "a habit of swinging between extremes"],
  },
  "The Devil": {
    upright: ["A familiar attachment can narrow your choices, even when it offers comfort.", "a familiar attachment that makes your choices feel smaller"],
    reversed: ["Naming a hold something has on you can help you see where you have room to choose.", "recognizing a habit you have room to change"],
  },
  "The Tower": {
    upright: ["A disruption can expose the assumptions that were holding an unstable situation together.", "a change that exposed a hidden problem"],
    reversed: ["Anticipating a disruption can make it tempting to leave a fragile arrangement untouched.", "a fragile arrangement you are reluctant to disturb"],
  },
  "The Star": {
    upright: ["A modest source of hope can help you rebuild after a difficult stretch.", "a small source of hope after a setback"],
    reversed: ["Discouragement may be making quiet signs of progress hard to see.", "a small sign of progress you might be overlooking"],
  },
  "The Moon": {
    upright: ["When the picture is incomplete, fear and intuition can be difficult to tell apart.", "making sense of uncertainty before you act"],
    reversed: ["A fear may lose some of its power as its source comes into clearer view.", "a fear that changes when you can name it"],
  },
  "The Sun": {
    upright: ["Clarity and uncomplicated enjoyment can give you energy worth noticing.", "a source of simple enjoyment"],
    reversed: ["Pressure to feel cheerful can make it harder to notice what genuinely lifts your mood.", "making space for joy without forcing it"],
  },
  "Judgement": {
    upright: ["A clear look at earlier decisions can help you choose what to answer for and what to begin again.", "learning from an earlier decision"],
    reversed: ["An unforgiving inner critic can drown out the lesson an honest review might offer.", "the difference between accountability and self-criticism"],
  },
  "The World": {
    upright: ["A completed cycle gives you a chance to recognize what you have learned and bring it forward.", "acknowledging what you have completed"],
    reversed: ["One loose end may be keeping a finished chapter from feeling complete.", "a loose end that keeps a chapter open"],
  },
  "Ace of Wands": {
    upright: ["A spark of enthusiasm is worth trying out while the idea still feels alive.", "an idea you are excited to try"],
    reversed: ["A new idea may need rest, time, or a smaller first experiment before it catches.", "a creative idea that has been slow to catch"],
  },
  "Two of Wands": {
    upright: ["From a secure starting point, you can decide how far you want to venture.", "planning beyond what already feels familiar"],
    reversed: ["A comfortable plan may feel safe while keeping a meaningful possibility out of reach.", "the pull of a familiar plan"],
  },
  "Three of Wands": {
    upright: ["An effort you have already set in motion can teach you where to look next.", "waiting to see where an early effort leads"],
    reversed: ["A delay may invite you to shorten your horizon and act on what is within reach.", "adjusting a plan when progress is delayed"],
  },
  "Four of Wands": {
    upright: ["A shared milestone deserves a moment of celebration and belonging.", "celebrating a milestone with people who helped you reach it"],
    reversed: ["A celebration or homecoming may feel unsettled if the sense of belonging is missing.", "what would make a place feel more welcoming"],
  },
  "Five of Wands": {
    upright: ["Competing ideas can sharpen a plan when everyone has room to be heard.", "learning from a disagreement"],
    reversed: ["A quarrel can keep taking energy after it has stopped yielding anything useful.", "stepping back from an unproductive quarrel"],
  },
  "Six of Wands": {
    upright: ["Recognition can mark real progress and remind you who helped make it possible.", "receiving recognition for work you care about"],
    reversed: ["A lack of applause can prompt you to choose your own measure of success.", "a measure of success that doesn't depend on approval"],
  },
  "Seven of Wands": {
    upright: ["A position you care about may need a clear and deliberate defense.", "standing up for something you care about"],
    reversed: ["Defending every boundary at once can leave little energy for the one that matters most.", "choosing which battles deserve your effort"],
  },
  "Eight of Wands": {
    upright: ["When messages and opportunities arrive quickly, a timely response can carry things forward.", "deciding what deserves a quick response"],
    reversed: ["Crossed messages or a rushed decision can complicate something that needs a moment of coordination.", "slowing down enough to clear up a misunderstanding"],
  },
  "Nine of Wands": {
    upright: ["Experience can help you protect your remaining energy while you finish what is close to done.", "saving enough energy to see something through"],
    reversed: ["Expecting another setback can keep you braced long after the situation has changed.", "lowering your guard where it is safe to do so"],
  },
  "Ten of Wands": {
    upright: ["A worthwhile commitment can still become too heavy to carry on your own.", "a responsibility you could share"],
    reversed: ["Setting down an obligation can make space for the work you actually need to finish.", "an obligation you could set down"],
  },
  "Page of Wands": {
    upright: ["Curiosity can be enough reason to try something before you know where it will lead.", "following an interest without needing a plan for it"],
    reversed: ["Chasing the next interesting idea can keep you from discovering what the current one could become.", "staying with an idea after the initial excitement fades"],
  },
  "Knight of Wands": {
    upright: ["Energy and daring can get you moving. Give that momentum a destination you want to reach.", "putting bold energy behind a deliberate choice"],
    reversed: ["A quick start can create extra work if enthusiasm sends you in several directions at once.", "the difference between acting boldly and acting impulsively"],
  },
  "Queen of Wands": {
    upright: ["Owning what excites you can give others permission to show up with confidence too.", "letting people see what genuinely excites you"],
    reversed: ["Comparing yourself to others can make it harder to follow the interests that feel like your own.", "creative confidence that doesn't depend on comparison"],
  },
  "King of Wands": {
    upright: ["A clear vision can rally people when you give them room to shape how it happens.", "sharing a vision without controlling every detail"],
    reversed: ["A strong vision can turn into impatience when other people need time to find their role.", "impatience with people who need time to find their role"],
  },
  "Ace of Cups": {
    upright: ["A new feeling or connection can be met with curiosity before you decide what it means.", "opening up to a new feeling"],
    reversed: ["A feeling you have held back may need a private or safer place to be expressed.", "finding a safe place for a feeling you have held back"],
  },
  "Two of Cups": {
    upright: ["Mutual attention and honest exchange can deepen a connection between equals.", "a connection where care goes both ways"],
    reversed: ["A mismatch in effort or expectations may need to be named before a bond can feel mutual again.", "an unspoken imbalance in a relationship"],
  },
  "Three of Cups": {
    upright: ["Friendship and shared celebration can make an ordinary moment feel sustaining.", "being supported by friends or community"],
    reversed: ["A group you enjoy may be asking for more social energy than you have to give right now.", "choosing how much social energy you can give"],
  },
  "Four of Cups": {
    upright: ["Disinterest may be asking for rest, or for a closer look at an offer you have overlooked.", "an opportunity you might have dismissed too quickly"],
    reversed: ["After time withdrawn, a small invitation may feel worth accepting again.", "reconnecting after a period of withdrawal"],
  },
  "Five of Cups": {
    upright: ["Disappointment deserves attention alongside the support or possibilities that remain.", "making room for both loss and what remains"],
    reversed: ["Making peace with a disappointment can free attention for something still available to you.", "a source of support that remains after a loss"],
  },
  "Six of Cups": {
    upright: ["A memory or familiar kindness can remind you of something you still need.", "a small kindness you remember from earlier in life"],
    reversed: ["A fond memory can become limiting if you judge every new experience against it.", "an old memory that colors a current choice"],
  },
  "Seven of Cups": {
    upright: ["Several possibilities can look appealing from a distance. Looking closely can reveal which one is real for you.", "distinguishing a real option from an appealing fantasy"],
    reversed: ["Narrowing your options can free energy for a choice you can actually make.", "choosing one possibility to pursue"],
  },
  "Eight of Cups": {
    upright: ["It can be time to leave something you have invested in when it no longer meets an important need.", "walking away from something that once mattered"],
    reversed: ["Staying and leaving can both feel costly when the familiar has stopped sustaining you.", "the cost of staying in a familiar situation"],
  },
  "Nine of Cups": {
    upright: ["Pause long enough to enjoy what you hoped for or worked to create.", "allowing yourself to enjoy what has gone well"],
    reversed: ["Getting what you wanted can reveal a different need underneath the original wish.", "a wish that may be standing in for a deeper need"],
  },
  "Ten of Cups": {
    upright: ["A shared sense of home grows from the ways people care for one another in everyday life.", "an everyday practice that helps people feel at home"],
    reversed: ["An ideal picture of home or family can obscure what the people involved actually need.", "an expectation about home or family that deserves another look"],
  },
  "Page of Cups": {
    upright: ["A small gesture, dream, or unexpected feeling can invite a more imaginative response.", "making room for a feeling that surprised you"],
    reversed: ["Fear of being judged can keep a tender feeling or idea from being shared.", "an idea or feeling you want to share carefully"],
  },
  "Knight of Cups": {
    upright: ["An invitation or heartfelt gesture can give a feeling a clear direction.", "acting deliberately on something you feel strongly about"],
    reversed: ["A compelling gesture may need steady follow-through to live up to what it promises.", "whether a promise is supported by actions"],
  },
  "Queen of Cups": {
    upright: ["Attentive listening can hold another person's feelings while leaving room for your own.", "listening with care while keeping track of your own feelings"],
    reversed: ["Taking on another person's emotions can make your own needs harder to recognize.", "a boundary that would protect your emotional energy"],
  },
  "King of Cups": {
    upright: ["A steady response can honor a strong feeling while giving you time to choose what to do.", "staying steady while a strong feeling passes through"],
    reversed: ["Keeping every emotion contained can turn composure into distance or pressure.", "acknowledging a feeling before deciding how to respond"],
  },
  "Ace of Swords": {
    upright: ["A clear thought or honest conversation can help you name the issue at the center of a situation.", "an observation that brings a situation into focus"],
    reversed: ["Confusion may call for a better question before you settle on an answer.", "checking the assumptions behind a conclusion"],
  },
  "Two of Swords": {
    upright: ["A decision can stay suspended while two options feel equally difficult to face.", "a decision you have been putting off"],
    reversed: ["Putting a decision off can become more costly than choosing with imperfect information.", "a choice that has become harder to postpone"],
  },
  "Three of Swords": {
    upright: ["Naming a painful truth can give hurt the attention it needs.", "a painful truth that needed to be spoken"],
    reversed: ["Healing can begin with a small release of a story you have been repeating about the hurt.", "a painful story you are beginning to let go of"],
  },
  "Four of Swords": {
    upright: ["Rest can give your mind time to settle before you return to a demanding situation.", "taking a deliberate break after a demanding stretch"],
    reversed: ["Restlessness may signal that you are recovering slowly or that a period of retreat is ready to end.", "finding the right pace for returning after a break"],
  },
  "Five of Swords": {
    upright: ["Getting the last word can carry a cost for trust that outlasts the argument.", "a disagreement where winning came at a cost"],
    reversed: ["There may be a way to step out of a conflict or acknowledge harm without reopening every point.", "a conflict you would rather resolve than prolong"],
  },
  "Six of Swords": {
    upright: ["Moving toward calmer ground can help even if you bring some of the old worries with you.", "a transition away from a difficult situation"],
    reversed: ["A change of scenery may help only so far if an unresolved concern keeps traveling with you.", "an unresolved concern you keep carrying forward"],
  },
  "Seven of Swords": {
    upright: ["A discreet strategy can help you act independently. Consider who may be affected by what you keep to yourself.", "a decision about what to keep private"],
    reversed: ["Keeping something hidden can take more energy than addressing it directly.", "something that would be easier to carry if it were out in the open"],
  },
  "Eight of Swords": {
    upright: ["Some of what feels impossible may come from assumptions you haven't had a chance to test.", "a limit you have assumed without testing"],
    reversed: ["Questioning an old constraint can uncover one practical move you were overlooking.", "an option that becomes visible when you question an old rule"],
  },
  "Nine of Swords": {
    upright: ["A worry can feel more convincing after you have been turning it over alone for a long time.", "a worry that grows when you keep it to yourself"],
    reversed: ["Writing down or sharing a persistent worry can help you see its size more clearly.", "putting a persistent worry into words"],
  },
  "Ten of Swords": {
    upright: ["Recognizing that something has ended can give you space to stop trying to rescue it.", "an ending you need time to acknowledge"],
    reversed: ["After a difficult ending, recovery can start with an ordinary step that is within reach.", "the first manageable step after a difficult ending"],
  },
  "Page of Swords": {
    upright: ["A sharp question can reveal more than a quick opinion when you are willing to listen to the answer.", "a question you would like to ask before forming an opinion"],
    reversed: ["Speculation can get ahead of the facts when there is pressure to respond quickly.", "a claim you could verify before passing it along"],
  },
  "Knight of Swords": {
    upright: ["Decisive action can cut through delay when the goal and its consequences are clear.", "acting quickly after you have checked what is at stake"],
    reversed: ["Speed can turn determination into avoidable friction when other people need time or context.", "a moment when slowing down could make you more effective"],
  },
  "Queen of Swords": {
    upright: ["Clear language and firm boundaries can make a difficult exchange fairer for everyone.", "stating a boundary clearly and with care"],
    reversed: ["A sharp reply can protect you in the moment while making an honest conversation harder later.", "saying something difficult without making it harsher than necessary"],
  },
  "King of Swords": {
    upright: ["A reasoned decision can hold up under scrutiny when you make the criteria clear.", "a decision you can explain with clear reasons"],
    reversed: ["Reasoning can become selective when it serves a conclusion you have already chosen.", "looking for evidence that could change your mind"],
  },
  "Ace of Pentacles": {
    upright: ["A practical opportunity can become more substantial if you take one concrete step to develop it.", "a modest opportunity you can build on"],
    reversed: ["A promising offer may need workable terms, resources, or timing before you take it on.", "checking whether an opportunity is practical right now"],
  },
  "Two of Pentacles": {
    upright: ["Flexibility can help you juggle commitments while conditions keep changing.", "adjusting how you balance everyday commitments"],
    reversed: ["Keeping too many obligations moving can be a signal to set one down, even temporarily.", "one commitment you could pause to make room for another"],
  },
  "Three of Pentacles": {
    upright: ["A shared project improves when different skills meet clear feedback and a common goal.", "learning a craft through collaboration and feedback"],
    reversed: ["Unclear roles or expectations can make skilled people work at cross purposes.", "a role that needs to be clarified in a shared project"],
  },
  "Four of Pentacles": {
    upright: ["Protecting what you have can offer stability. Notice what it costs to keep a tight grip.", "the balance between security and flexibility"],
    reversed: ["A resource you have been protecting may now be more useful if you spend, share, or release it.", "a resource you could afford to loosen your grip on"],
  },
  "Five of Pentacles": {
    upright: ["A difficult stretch can make available support hard to see or hard to ask for.", "reaching for support during a difficult stretch"],
    reversed: ["Accepting a practical offer can begin to ease a situation you have been carrying alone.", "an offer of practical help you could accept"],
  },
  "Six of Pentacles": {
    upright: ["Giving and receiving can strengthen a relationship when the terms respect both people.", "help that leaves the recipient room to choose"],
    reversed: ["Generosity can create pressure if it comes with an unspoken debt or expectation.", "an unspoken condition attached to help"],
  },
  "Seven of Pentacles": {
    upright: ["Pausing to assess slow progress can help you decide whether to keep tending it.", "deciding if a slow investment still deserves your time"],
    reversed: ["Time already spent can make it hard to recognize when a method needs to change.", "a method you keep using because you have already invested in it"],
  },
  "Eight of Pentacles": {
    upright: ["Paying close attention to a small part of your practice can improve the whole craft over time.", "a skill you could improve through deliberate practice"],
    reversed: ["Repetition can become mechanical when you lose sight of the skill you meant to develop.", "a routine that needs a clearer purpose"],
  },
  "Nine of Pentacles": {
    upright: ["Enjoying the independence you have earned can help you recognize what made it possible.", "enjoying the results of your own effort"],
    reversed: ["The push to appear self-sufficient can obscure the support or rest that would make life more sustainable.", "the pressure to prove you can manage everything yourself"],
  },
  "Ten of Pentacles": {
    upright: ["Long-term security can come from the knowledge, resources, and care people pass to one another.", "something valuable you have inherited or could pass on"],
    reversed: ["Inherited expectations about success or security may be hard to fit around the life you want.", "an inherited expectation about what security should look like"],
  },
  "Page of Pentacles": {
    upright: ["A specific practice session or modest experiment can make an ambition feel more real.", "turning an ambition into a small learning goal"],
    reversed: ["A plan can remain abstract if the first task is too large or poorly defined.", "giving an unfinished plan a manageable first task"],
  },
  "Knight of Pentacles": {
    upright: ["A steady routine can carry an important commitment through periods when motivation is low.", "a routine that helps you keep a promise"],
    reversed: ["A dependable routine can become inertia when it keeps you from trying a needed adjustment.", "a routine you have outgrown"],
  },
  "Queen of Pentacles": {
    upright: ["Practical care can give you and the people around you a more comfortable place to stand.", "a tangible act of care that makes daily life easier"],
    reversed: ["The work of keeping things running may need to be shared when it crowds out your own basic needs.", "sharing the practical work of looking after others"],
  },
  "King of Pentacles": {
    upright: ["Resources built over time can support others when you manage them with a long view.", "using something you have built to support a lasting goal"],
    reversed: ["Preserving comfort or status can become costly if it leaves you unwilling to make a necessary change.", "a form of security that may be keeping you stuck"],
  },
};

const REFLECTION_PROMPTS = {
  Past: theme => `What past experience comes to mind when you think about ${theme}?`,
  Present: theme => `How does ${theme} show up in your life today?`,
  Future: theme => `When you think about ${theme}, what is one small step you could take next?`,
};

export function getReadingInsight(card, position) {
  const orientation = card.reversed ? "reversed" : "upright";
  const [meaning, theme] = CARD_MEANINGS[card.name][orientation];
  return { meaning, prompt: REFLECTION_PROMPTS[position](theme) };
}
