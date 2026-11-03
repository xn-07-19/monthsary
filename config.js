/* ==================================================================
   ✎  EVERYTHING PERSONAL LIVES IN THIS FILE
   Edit, save, then refresh the page. Keep the quotes and commas.
   Use \n inside text for a line break.
   ================================================================== */
window.MONTHSARY = {

  // Names (optional) — leave "" to hide them.
  yourName: "",    // signs the letter, e.g. "Migs"
  theirName: "",   // small "to:" line on the envelope, e.g. "Ally"

  pageTitle: "For you ♡",

  // ---------------------------------------------------------------
  // PHOTOS — drop files into the photos/ folder and list them here.
  // Any size or shape works; the original proportions are kept.
  // A missing file shows a "your photo here" placeholder card.
  // ---------------------------------------------------------------
  photos: [
    { src: "photos/1.png", caption: "My favorite smile." },
    { src: "photos/2.png", caption: "A moment I wish I could replay." },
    { src: "photos/3.png", caption: "One of my favorite memories with you." },
    { src: "photos/4.png", caption: "You make ordinary days feel special." },
  ],
  favoritePhoto: 0,   // which photo the final scene uses (0 = first)

  // ---------------------------------------------------------------
  // MUSIC — starts after the first tap, with a mute button.
  //   youtube: a YouTube video id or link (needs internet, and the
  //            page must be opened from a website / http server).
  //   src:     or your own file instead, e.g. "music/our-song.mp3"
  //            (set youtube to "" to use it).
  //   If neither works, a soft built-in piano loop plays instead.
  // ---------------------------------------------------------------
  music: {
    enabled: true,
    youtube: "https://www.youtube.com/watch?v=7MzjfdU4JfA",  // Na Para Bang
    startAt: 0,      // seconds into the song
    src: "",
    volume: 1,       // 0 – 1 (1 = max)
  },
  heartbeatSound: true,

  text: {
    // Scene 1 — tap my heart
    tapIntro: "Psst… I made something for you.",
    tapPrompts: ["Tap me!!", "Tap meee!", "Tap me harder… until my heart pops! ♡"],
    tapsToPop: 10,

    // Scene 2 — the big reveal
    reveal: ["ONE MONTH.", "SO MANY FEELINGS.", "ALL FOR YOU."],

    // Scene 3 — typed message (one entry per paragraph)
    message: [
      "HI LOVE!",
      "HAPPY FIRST MONTHSARY TO US.",
      "We might be apart right now…\nbut this little piece of my heart is here with you.",
      "So wherever you are,\ntake a moment…\nand let me remind you how much you mean to me.",
      "I LOVE YOU SO MUCH.",
    ],
    messageButton: "Come closer, love →",

    // Scene 4 — our little universe
    universeTitle: "Our little universe",
    universeHint: "Tap a memory to open it",

    // Scene 5 — even from here
    stars: ["Different places.", "Same moon.", "Still you."],
    starsButton: "Bring us closer ✦",
    starsAfter: "If I could choose where to be right now,\nI’d choose beside you.",

    // Scene 6 — the letter
    envelopeLabel: "For my favorite person.",
    letter: [
      "Happy first monthsary, love.",
      "One month may sound small, but the happiness you’ve brought into my life means so much to me.",
      "I wish I could celebrate this beside you, hold your hand, and tell you all of this in person. For now, I hope this little surprise makes the distance feel a little smaller.",
      "Thank you for the conversations, the laughter, and the little moments that give me reasons to smile.",
      "We still have so many memories to make. More stories, more pictures, and more days when I get to love you.",
      "Until I can hug you again, I hope you feel loved through every word here.",
      "I love you so much.\nHappy first monthsary to us.",
    ],

    // Scene 7 — the final surprise
    finalQuestion: "My favorite part of this month?",
    finalAnswer: "You.",
    finalTitle: "Happy First Monthsary, Love ♡",
    finalSub: "Here’s to our next chapter.",
    lastButton: "One last thing…",
    lastLines: "If you were here right now,\nI’d be hugging you.",
    replay: "Replay our little story ↺",
  },
};
