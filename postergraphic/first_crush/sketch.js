var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

words = [{
  "word": "NAME",
  "size": 11
}, {
  "word": "GRADE",
  "size": 9
}, {
  "word": "SCHOOL",
  "size": 8
}, {
  "word": "CLASS",
  "size": 8
}, {
  "word": "CUTE",
  "size": 7
}, {
  "word": "BOY",
  "size": 6
}, {
  "word": "GIRL",
  "size": 6
}, {
  "word": "FIRST",
  "size": 6
}, {
  "word": "CRUSH",
  "size": 4
}, {
  "word": "DOCTOR",
  "size": 4
}, {
  "word": "UNTIL",
  "size": 4
}, {
  "word": "KID",
  "size": 4
}, {
  "word": "REMEMBER",
  "size": 4
}, {
  "word": "YEARS",
  "size": 4
}, {
  "word": "PLAY",
  "size": 4
}, {
  "word": "SAME",
  "size": 4
}, {
  "word": "NICE",
  "size": 4
}, {
  "word": "LIKED",
  "size": 3
}, {
  "word": "90s",
  "size": 3
}, {
  "word": "BLONDE",
  "size": 3
}, {
  "word": "LOVE",
  "size": 3
}, {
  "word": "MADE",
  "size": 3
}, {
  "word": "SHY",
  "size": 3
}, {
  "word": "HAIR",
  "size": 3
}, {
  "word": "TALK",
  "size": 3
}, {
  "word": "PROBABLY",
  "size": 3
}, {
  "word": "MOVED",
  "size": 3
}, {
  "word": "TOGETHER",
  "size": 3
}, {
  "word": "FOUND",
  "size": 3
}, {
  "word": "FRIENDS",
  "size": 3
}, {
  "word": "PEOPLE",
  "size": 2
}, {
  "word": "SEEMED",
  "size": 2
}, {
  "word": "LATER",
  "size": 2
}, {
  "word": "THOUGHT",
  "size": 2
}, {
  "word": "BEST",
  "size": 2
}, {
  "word": "JAMES",
  "size": 2
}, {
  "word": "WENT",
  "size": 2
},  {
  "word": "HIGH",
  "size": 2
}, {
  "word": "KISS",
  "size": 2
}, {
  "word": "WEIRD",
  "size": 2
}, {
  "word": "STRAIGHT",
  "size": 2
}, {
  "word": "ONLY",
  "size": 2
},{
  "word": "COURAGE",
  "size": 2
},{
  "word": "EMBARRASSED",
  "size": 2
},{
  "word": "TOTALLY",
  "size": 2
},{
  "word": "MIDDLE",
  "size": 2
},{
  "word": "MOM",
  "size": 2
},{
  "word": "PATIENT",
  "size": 2
},{
  "word": "POPULAR",
  "size": 2
},
{
  "word": "HEART",
  "size": 2
},{
  "word": "OLD",
  "size": 2
},{
  "word": "WORLD",
  "size": 2
},{
  "word": "GAVE",
  "size": 2
},{
  "word": "SECOND",
  "size": 2
},
{
  "word": "TALL",
  "size": 2
},{
  "word": "FRIEND",
  "size": 2
},{
  "word": "CUT",
  "size": 2
},{
  "word": "FUNNY",
  "size": 2
},{
  "word": "ANOTHER",
  "size": 2
},{
  "word": "ALMOST",
  "size": 2
},{
  "word": "WANTED",
  "size": 2
},{
  "word": "FACE",
  "size": 2
},{
  "word": "BECAME",
  "size": 2
},{
  "word": "MEMORY",
  "size": 2
},{
  "word": "NOTHING",
  "size": 2
},{
  "word": "WILLY",
  "size": 1
},{
  "word": "LIFE",
  "size": 1
},{
  "word": "FAMILIAR",
  "size": 1
},{
  "word": "MAGICAL",
  "size": 1
},{
  "word": "PHOTOS",
  "size": 1
},{
  "word": "MAUDE",
  "size": 1
},{
  "word": "PARENTS",
  "size": 1
},{
  "word": "BABYSAT",
  "size": 1
},{
  "word": "FEMINIST",
  "size": 1
},{
  "word": "APPRECIATE",
  "size": 1
},{
  "word": "WALKED",
  "size": 1
},{
  "word": "ARTHUR",
  "size": 1
},{
  "word": "PLAYGROUND",
  "size": 1
},{
  "word": "LIT",
  "size": 1
},{
  "word": "SERENDIPITY",
  "size": 1
},{
  "word": "BRIGHTEST",
  "size": 1
},{
  "word": "ANSWERING",
  "size": 1
},{
  "word": "FAMILY",
  "size": 1
},{
  "word": "FELLOW",
  "size": 1
},{
  "word": "STAR",
  "size": 1
},{
  "word": "NEIGHBORS",
  "size": 1
},{
  "word": "ATTIC",
  "size": 1
},{
  "word": "CRUSHED",
  "size": 1
},{
  "word": "COMFORTABLE",
  "size": 1
},{
  "word": "COLLEGE",
  "size": 1
},{
  "word": "MATURE",
  "size": 1
},{
  "word": "GROUP",
  "size": 1
},{
  "word": "RIDICULOUS",
  "size": 1
},{
  "word": "SMART",
  "size": 1
},{
  "word": "CUTIE",
  "size": 1
},{
  "word": "BROTHER",
  "size": 1
},{
  "word": "LINE",
  "size": 1
},
{
  "word": "CHOCOLATE",
  "size": 1
},{
  "word": "ADMIRER",
  "size": 1
},{
  "word": "FAINT",
  "size": 1
},{
  "word": "CHUBBY",
  "size": 1
},{
  "word": "TEACHER",
  "size": 1
},{
  "word": "BRUNETTE",
  "size": 1
},{
  "word": "MOMENT",
  "size": 1
},{
  "word": "ANDREAS",
  "size": 1
},{
  "word": "OLDER",
  "size": 1
},{
  "word": "WILDER",
  "size": 1
},{
  "word": "SECRET",
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