var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

words = [{
  "word": "BEING",
  "size": 7
}, {
  "word": "EACH",
  "size": 6
}, {
  "word": "LOVE",
  "size": 5
}, {
  "word": "NIGHT",
  "size": 4
}, {
  "word": "FELT",
  "size": 4
}, {
  "word": "BED",
  "size": 4
}, {
  "word": "ASLEEP",
  "size": 4
}, {
  "word": "BOYFRIEND",
  "size": 4
}, {
  "word": "TOGETHER",
  "size": 4
}, {
  "word": "FELL",
  "size": 3
}, {
  "word": "HUSBAND",
  "size": 3
}, {
  "word": "AFTER",
  "size": 3
}, {
  "word": "EYES",
  "size": 3
}, {
  "word": "HOME",
  "size": 3
}, {
  "word": "SITTING",
  "size": 3
}, {
  "word": "RELATIONSHIP",
  "size": 3
}, {
  "word": "LOOKING",
  "size": 3
}, {
  "word": "LOVED",
  "size": 2
}, {
  "word": "GIRLFRIEND",
  "size": 2
}, {
  "word": "LONG",
  "size": 2
}, {
  "word": "NEXT",
  "size": 2
}, {
  "word": "SAYING",
  "size": 2
}, {
  "word": "FAMILY",
  "size": 2
}, {
  "word": "DANCING",
  "size": 2
}, {
  "word": "TEARS",
  "size": 2
}, {
  "word": "BEFORE",
  "size": 2
}, {
  "word": "WAKE",
  "size": 2
}, {
  "word": "MOMENT",
  "size": 2
}, {
  "word": "COMFORTABLE",
  "size": 2
}, {
  "word": "COLD",
  "size": 2
}, {
  "word": "ROOM",
  "size": 2
}, {
  "word": "WITHOUT",
  "size": 2
}, {
  "word": "HAND",
  "size": 2
}, {
  "word": "HOLDING",
  "size": 2
}, {
  "word": "FRIENDS",
  "size": 2
}, {
  "word": "SLEEP",
  "size": 2
}, {
  "word": "FRIENDS",
  "size": 2
},  {
  "word": "HAVEN",
  "size": 1
}, {
  "word": "ASK",
  "size": 1
}, {
  "word": "SUSPICIOUS",
  "size": 1
}, {
  "word": "FAVORITE",
  "size": 1
}, {
  "word": "KEROUAC",
  "size": 1
},{
  "word": "WARCRAFT",
  "size": 1
},{
  "word": "BEACH",
  "size": 1
},{
  "word": "PHOTOGRAPH",
  "size": 1
},{
  "word": "BLINKS",
  "size": 1
},{
  "word": "BROKE",
  "size": 1
},{
  "word": "BEERS",
  "size": 1
},{
  "word": "APARTMENT",
  "size": 1
},
{
  "word": "MUSIC",
  "size": 2
},{
  "word": "WEDDING",
  "size": 1
},{
  "word": "TOOTHBRUSH",
  "size": 1
},{
  "word": "CAMPING",
  "size": 1
},{
  "word": "FOREIGN",
  "size": 1
},
{
  "word": "FUTURE",
  "size": 1
},{
  "word": "GROCERIES",
  "size": 1
},{
  "word": "CUDDLES",
  "size": 1
},{
  "word": "PILLOW",
  "size": 1
},{
  "word": "CONNECTION",
  "size": 1
},{
  "word": "AFTERNOON",
  "size": 1
},{
  "word": "STARING",
  "size": 1
},{
  "word": "WALKING",
  "size": 1
},{
  "word": "SOPRANOS",
  "size": 1
},{
  "word": "BUTTERFLIES",
  "size": 1
},{
  "word": "BOYFRIENDS",
  "size": 1
},{
  "word": "PAINTED",
  "size": 1
},
]


//day of week


for (var i = 0; i<words.length; i++) {
r.text(words[i].word, (125+Rune.random(1,600)),(10+Rune.random(1,600)))
  .fill("#FA6CAC")
  .stroke(false)
  .fontSize(words[i].size*10)
  .textAlign("center")
  .fontFamily("Montserrat")
  // .textDecoration("underline")
  .fontWeight("bold");
}

r.draw();