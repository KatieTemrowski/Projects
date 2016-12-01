var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

words = [{
  "word": "FIRST",
  "size": 7
}, {
  "word": "LOVE",
  "size": 6
}, {
  "word": "PARTNER",
  "size": 5
}, {
  "word": "OUTSIDE",
  "size": 5
}, {
  "word": "AROUND",
  "size": 4
}, {
  "word": "SEX",
  "size": 4
}, {
  "word": "BOYFRIEND",
  "size": 4
}, {
  "word": "MAKING",
  "size": 4
}, {
  "word": "THUNDERSTORM",
  "size": 4
}, {
  "word": "LOVED",
  "size": 3
}, {
  "word": "NIGHT",
  "size": 3
}, {
  "word": "SWEET",
  "size": 3
}, {
  "word": "LONG",
  "size": 3
}, {
  "word": "MAN",
  "size": 3
}, {
  "word": "ROMANTIC",
  "size": 3
}, {
  "word": "STARTED",
  "size": 3
}, {
  "word": "BAR",
  "size": 3
}, {
  "word": "STILL",
  "size": 3
}, {
  "word": "RELATIONSHIP",
  "size": 3
}, {
  "word": "FEEL",
  "size": 3
}, {
  "word": "TOLD",
  "size": 3
}, {
  "word": "WANTED",
  "size": 3
}, {
  "word": "MONTHS",
  "size": 3
}, {
  "word": "INTENSE",
  "size": 3
}, {
  "word": "DURING",
  "size": 2
}, {
  "word": "BEACH",
  "size": 2
}, {
  "word": "CONVERSATION",
  "size": 2
}, {
  "word": "PEOPLE",
  "size": 2
}, {
  "word": "DATING",
  "size": 2
}, {
  "word": "FULL",
  "size": 2
}, {
  "word": "OFF",
  "size": 2
}, {
  "word": "MIDDLE",
  "size": 2
}, {
  "word": "CURRENT",
  "size": 2
}, {
  "word": "YEAR",
  "size": 2
}, {
  "word": "WEIRD",
  "size": 2
}, {
  "word": "HUSBAND",
  "size": 2
}, {
  "word": "CRUSH",
  "size": 2
},  {
  "word": "GUESS",
  "size": 2
}, {
  "word": "HEAD",
  "size": 2
}, {
  "word": "VISIT",
  "size": 2
}, {
  "word": "EX",
  "size": 2
}, {
  "word": "DISTANCE",
  "size": 2
},{
  "word": "BREATH",
  "size": 2
},{
  "word": "ALONE",
  "size": 2
},{
  "word": "WINE",
  "size": 2
},{
  "word": "MOMENT",
  "size": 2
},{
  "word": "MOVING",
  "size": 2
},{
  "word": "SKATED",
  "size": 2
},{
  "word": "BITCH",
  "size": 2
},
{
  "word": "DANCING",
  "size": 2
},{
  "word": "SKATE",
  "size": 2
},{
  "word": "HANDS",
  "size": 2
},{
  "word": "ICE",
  "size": 2
},{
  "word": "RIGHT",
  "size": 2
},
{
  "word": "FEELING",
  "size": 2
},{
  "word": "BF",
  "size": 1
},{
  "word": "DRINK",
  "size": 1
},{
  "word": "TIGHT",
  "size": 1
},{
  "word": "HORROR",
  "size": 1
},{
  "word": "LIFE",
  "size": 1
},{
  "word": "CHEST",
  "size": 1
},{
  "word": "PASSIONATE",
  "size": 1
},{
  "word": "GIRLFRIEND",
  "size": 1
},{
  "word": "VOICE",
  "size": 1
},{
  "word": "SMELLS",
  "size": 1
},{
  "word": "ENCHANTING",
  "size": 1
},{
  "word": "EVERYDAY",
  "size": 1
},{
  "word": "GIRLFRIEND",
  "size": 1
},{
  "word": "LIKED",
  "size": 1
},{
  "word": "DAYS",
  "size": 1
},{
  "word": "CHINESE",
  "size": 1
},{
  "word": "CANDY",
  "size": 1
},{
  "word": "JACKET",
  "size": 1
},{
  "word": "FLINGS",
  "size": 1
},{
  "word": "FOGGY",
  "size": 1
},{
  "word": "AWE",
  "size": 1
},{
  "word": "THREE",
  "size": 1
},{
  "word": "ROADTRIPPING",
  "size": 1
},{
  "word": "ENDS",
  "size": 1
},{
  "word": "FAMILY",
  "size": 1
},{
  "word": "FLOOR",
  "size": 1
},{
  "word": "PHYSICALLY",
  "size": 1
},{
  "word": "TRAINS",
  "size": 1
},{
  "word": "MIDNIGHT",
  "size": 1
},{
  "word": "STAYING",
  "size": 1
},{
  "word": "GF",
  "size": 1
},{
  "word": "KISS",
  "size": 1
},{
  "word": "PARTY",
  "size": 1
},{
  "word": "ADMIRATION",
  "size": 1
},{
  "word": "LIVED",
  "size": 1
},{
  "word": "REMOTE",
  "size": 1
},{
  "word": "SMOKEY",
  "size": 1
},{
  "word": "MOMENTS",
  "size": 1
},{
  "word": "MONEY",
  "size": 1
},{
  "word": "EAT",
  "size": 1
},{
  "word": "GRIPPED",
  "size": 1
},{
  "word": "CHARM",
  "size": 1
},
{
  "word": "HUNG",
  "size": 1
},{
  "word": "JUNK",
  "size": 1
},{
  "word": "LETTING",
  "size": 1
},{
  "word": "SHORT",
  "size": 1
},{
  "word": "SAVING",
  "size": 1
},{
  "word": "MARATHONING",
  "size": 1
},{
  "word": "IDIOT",
  "size": 1
},{
  "word": "UNAVOIDABLE",
  "size": 1
},{
  "word": "TOUCHING",
  "size": 1
},{
  "word": "OVERLOOKING",
  "size": 1
},{
  "word": "FILMS",
  "size": 1
},

]

//day of week


for (var i = 0; i<words.length; i++) {
r.text(words[i].word, (75+Rune.random(1,600)),(75+Rune.random(1,650)))
  .fill("#F7081F")
  .stroke(false)
  .fontSize(words[i].size*15)
  .textAlign("center")
  .fontFamily("Montserrat")
  // .textDecoration("underline")
  .fontWeight("bold");
}

r.draw();