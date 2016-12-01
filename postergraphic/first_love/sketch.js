var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

words = [{
  "word": "FIRST",
  "size": 13
}, {
  "word": "LOVE",
  "size": 9
}, {
  "word": "FRIEND",
  "size": 8
}, {
  "word": "TOGETHER",
  "size": 6
}, {
  "word": "WANTED",
  "size": 5
}, {
  "word": "SCHOOL",
  "size": 5
}, {
  "word": "YEARS",
  "size": 5
}, {
  "word": "COLLEGE",
  "size": 4
}, {
  "word": "SAME",
  "size": 4
}, {
  "word": "BOYFRIEND",
  "size": 4
}, {
  "word": "FUNNY",
  "size": 4
}, {
  "word": "VOICE",
  "size": 3
}, {
  "word": "BEAUTIFUL",
  "size": 3
}, {
  "word": "HOME",
  "size": 3
}, {
  "word": "MUSIC",
  "size": 3
}, {
  "word": "SMART",
  "size": 3
}, {
  "word": "APART",
  "size": 3
}, {
  "word": "STILL",
  "size": 3
}, {
  "word": "KISSED",
  "size": 3
}, {
  "word": "BOY",
  "size": 3
}, {
  "word": "BEST",
  "size": 3
}, {
  "word": "MONTHS",
  "size": 3
}, {
  "word": "YEAR",
  "size": 3
}, {
  "word": "STUPID",
  "size": 3
}, {
  "word": "SUPER",
  "size": 2
}, {
  "word": "LIFE",
  "size": 2
}, {
  "word": "WEIRD",
  "size": 2
}, {
  "word": "HOUSE",
  "size": 2
}, {
  "word": "REAL",
  "size": 2
}, {
  "word": "PLAYED",
  "size": 2
}, {
  "word": "CAR",
  "size": 2
}, {
  "word": "MARRIED",
  "size": 2
}, {
  "word": "PASSIONATE",
  "size": 2
}, {
  "word": "SPENT",
  "size": 2
}, {
  "word": "FELL",
  "size": 2
}, {
  "word": "NIGHT",
  "size": 2
}, {
  "word": "COUNTRY",
  "size": 2
},  {
  "word": "FUN",
  "size": 2
}, {
  "word": "YOUNG",
  "size": 2
}, {
  "word": "SHANLEY",
  "size": 2
}, {
  "word": "HOSPITAL",
  "size": 2
}, {
  "word": "LOOKING",
  "size": 2
},{
  "word": "15",
  "size": 2
},{
  "word": "DATED",
  "size": 2
},{
  "word": "SERIOUS",
  "size": 2
},{
  "word": "BROKE",
  "size": 2
},{
  "word": "OLD",
  "size": 2
},{
  "word": "CUTE",
  "size": 2
},{
  "word": "FEEL",
  "size": 2
},
{
  "word": "JASON",
  "size": 2
},{
  "word": "LOVED",
  "size": 2
},{
  "word": "TEENAGER",
  "size": 2
},{
  "word": "BOYS",
  "size": 2
},{
  "word": "GIRLFRIEND",
  "size": 2
},
{
  "word": "WRITE",
  "size": 2
},{
  "word": "KISSING",
  "size": 1
},{
  "word": "AGO",
  "size": 1
},{
  "word": "ARTIST",
  "size": 1
},{
  "word": "CATHOLIC",
  "size": 1
},{
  "word": "DORM",
  "size": 1
},{
  "word": "HAND",
  "size": 1
},{
  "word": "FRUSTRATED",
  "size": 1
},{
  "word": "CHICAGO",
  "size": 1
},{
  "word": "FUCKED",
  "size": 1
},{
  "word": "BED",
  "size": 1
},{
  "word": "BABY",
  "size": 1
},{
  "word": "SOPHOMORE",
  "size": 1
},{
  "word": "SWEETHEART",
  "size": 1
},{
  "word": "MILKSHAKE",
  "size": 1
},{
  "word": "HAIR",
  "size": 1
},{
  "word": "RELATIONSHIP",
  "size": 1
},{
  "word": "SNEAKING",
  "size": 1
},{
  "word": "GIRLS",
  "size": 1
},{
  "word": "ELECTRIC",
  "size": 1
},{
  "word": "DIVINE",
  "size": 1
},{
  "word": "PROM",
  "size": 1
},{
  "word": "ALCOHOL",
  "size": 1
},{
  "word": "KISSES",
  "size": 1
},{
  "word": "LOVEEEEEEEE",
  "size": 1
},{
  "word": "ENGAGED",
  "size": 1
},{
  "word": "HEARTBREAK",
  "size": 1
},{
  "word": "UNCONTROLLABLY",
  "size": 1
},{
  "word": "DOUCHE",
  "size": 1
},{
  "word": "SPOON",
  "size": 1
},{
  "word": "INSEPARABLE",
  "size": 1
},{
  "word": "MICHIGAN",
  "size": 1
},{
  "word": "KISS",
  "size": 1
},{
  "word": "LIZZY",
  "size": 1
},{
  "word": "JEWISH",
  "size": 1
},{
  "word": "PUPPY",
  "size": 1
},{
  "word": "EMBARRASSING",
  "size": 1
},{
  "word": "PIZZA",
  "size": 1
},{
  "word": "BIKES",
  "size": 1
},{
  "word": "TWINK",
  "size": 1
},{
  "word": "ENGLISH",
  "size": 1
},{
  "word": "PARTYING",
  "size": 1
},{
  "word": "FLEETING",
  "size": 1
},
{
  "word": "LETTERS",
  "size": 1
},{
  "word": "INTELLIGENT",
  "size": 1
},{
  "word": "STUDYING",
  "size": 1
},{
  "word": "ARTISTICALLY",
  "size": 1
},{
  "word": "MANIPULATIVE",
  "size": 1
},{
  "word": "SUNSET",
  "size": 1
},{
  "word": "TALENTED",
  "size": 1
},{
  "word": "FLAWS",
  "size": 1
},{
  "word": "EXPERIMENTATION",
  "size": 1
},{
  "word": "EXPLODED",
  "size": 1
},{
  "word": "SINGING",
  "size": 1
},

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

r.draw();