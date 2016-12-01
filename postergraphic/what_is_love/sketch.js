var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

words = [{
  "word": "LOVE",
  "size": 13
}, {
  "word": "SOMEONE",
  "size": 12
}, {
  "word": "PERSON",
  "size": 9
}, {
  "word": "BEING",
  "size": 7
}, {
  "word": "FEELING",
  "size": 6
}, {
  "word": "CARE",
  "size": 5
}, {
  "word": "YOURSELF",
  "size": 4
}, {
  "word": "AROUND",
  "size": 4
}, {
  "word": "RESPECT",
  "size": 3
}, {
  "word": "RELATIONSHIP",
  "size": 3
}, {
  "word": "UNDERSTANDING",
  "size": 3
}, {
  "word": "ANOTHER",
  "size": 3
}, {
  "word": "PLUS",
  "size": 2
}, {
  "word": "TRUSTING",
  "size": 2
}, {
  "word": "VULNERABLE",
  "size": 2
}, {
  "word": "DEEP",
  "size": 2
}, {
  "word": "MOMENT",
  "size": 2
}, {
  "word": "WORLD",
  "size": 2
}, {
  "word": "STILL",
  "size": 2
}, {
  "word": "KNOWING",
  "size": 2
}, {
  "word": "WRONG",
  "size": 2
}, {
  "word": "BOND",
  "size": 2
}, {
  "word": "FOREVER",
  "size": 2
}, {
  "word": "FLAWS",
  "size": 2
}, {
  "word": "FEEL",
  "size": 2
}, {
  "word": "SHOW",
  "size": 2
}, {
  "word": "WANTING",
  "size": 2
}, {
  "word": "FEELINGS",
  "size": 2
}, {
  "word": "ALWAYS",
  "size": 2
}, {
  "word": "SUPPORTING",
  "size": 1
}, {
  "word": "LETTER",
  "size": 1
}, {
  "word": "UNADULTERATED",
  "size": 1
}, {
  "word": "STRONG",
  "size": 1
}, {
  "word": "CHALLENGES",
  "size": 1
}, {
  "word": "SIMPLY",
  "size": 1
}, {
  "word": "PASSING",
  "size": 1
}, {
  "word": "OVERWHELMING",
  "size": 1
},  {
  "word": "SPEND",
  "size": 1
}, {
  "word": "BEST",
  "size": 1
}, {
  "word": "SHARING",
  "size": 1
}, {
  "word": "OPENING",
  "size": 1
}, {
  "word": "FACING",
  "size": 1
},{
  "word": "FOWARD",
  "size": 1
},{
  "word": "DINNER",
  "size": 1
},{
  "word": "ANSWER",
  "size": 1
},{
  "word": "HARD",
  "size": 1
},{
  "word": "FAMILY",
  "size": 1
},{
  "word": "LEVEL",
  "size": 1
},{
  "word": "SAFE",
  "size": 1
},
{
  "word": "PRESSURE",
  "size": 1
},{
  "word": "CONNECTEDNESS",
  "size": 1
},{
  "word": "REACHED",
  "size": 1
},{
  "word": "TENDERNESS",
  "size": 1
},{
  "word": "BINARY",
  "size": 1
},
{
  "word": "EARTH",
  "size": 1
},{
  "word": "COMFORTABLE",
  "size": 1
},{
  "word": "WATER",
  "size": 1
},{
  "word": "STRESSED",
  "size": 1
},{
  "word": "HAPPINESS",
  "size": 1
},{
  "word": "SPEAK",
  "size": 1
},{
  "word": "GUSHY",
  "size": 1
},{
  "word": "ACCEPT",
  "size": 1
},{
  "word": "GUSHY",
  "size": 1
},{
  "word": "FEAR",
  "size": 1
},{
  "word": "HAPPY",
  "size": 1
},{
  "word": "ROMANTIC",
  "size": 1
},{
  "word": "PATIENCE",
  "size": 1
},{
  "word": "LOYALTY",
  "size": 1
},{
  "word": "SOCIETAL",
  "size": 1
},{
  "word": "KINDNESS",
  "size": 1
},{
  "word": "THE UNDERWOODS",
  "size": 1
},{
  "word": "WAVES",
  "size": 1
},{
  "word": "ABILITY",
  "size": 1
},{
  "word": "BULLSHIT",
  "size": 1
}
]


//day of week


for (var i = 0; i<words.length; i++) {
r.text(words[i].word, (125+Rune.random(1,600)),(10+Rune.random(1,600)))
  .fill("#F4144E")
  .stroke(false)
  .fontSize(words[i].size*10)
  .textAlign("center")
  .fontFamily("Montserrat")
  // .textDecoration("underline")
  .fontWeight("bold");
}
r.text("what is love", 100,100)
  .fill(0)
  .stroke(false)
  .fontSize(20)
  .textAlign("center")
  .fontFamily("Montserrat")
  // .textDecoration("underline")
  // .fontWeight("bold");

r.draw();