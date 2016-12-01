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

// 'OVERLOOKING': 1, 'TOUCHING': 1, 'BOY': 1, 'HOME': 1, 'FILMS': 1, 'END': 1, 'COLD': 1, 'SEVERAL': 1, 'ROUND': 1, 'COMPLETELY': 1, 'HAPPY': 1, 'MADE': 1, 'CONSOLING': 1, 'DIRTY': 1, 'SHOW': 1, 'FAVORITE': 1, 'ONLY': 1, 'TRIPS': 1, 'LOOKED': 1, 'TILL': 1, 'CUDDLE': 1, '7': 1, 'RAILING': 1, 'MEET': 1, 'GETS': 1, 'UNINTERRUPTED': 1, 'CIRCLES': 1, 'EYES': 1, 'KNEW': 1, 'FOOD': 1, 'MICHIGAN': 1, 'UNDERGRAD': 1, 'O': 1, 'CLUMSY': 1, 'FIVE': 1, 'COMING': 1, 'LAST': 1, 'FALLING': 1, 'MORNING': 1, 'CONVERSELY': 1, 'LIGHTS': 1, 'IDENTITY': 1, 'STAYED': 1, 'THINKING': 1, 'TRAJECTORY': 1, 'BOTTOM': 1, 'MATTRESS': 1, 'SERIOUSNESS': 1, 'BEER': 1, 'LAUGHING': 1, 'PURSUING': 1, 'SENIOR': 1, 'APART': 1, 'PULLED': 1, 'NOTION': 1, 'WAITED': 1, 'SUMMER': 1, 'EATING': 1, 'CROUCHED': 1, 'ACE': 1, 'APARTMENTS': 1, 'PERHAPS': 1, 'BATED': 1, 'SELVES': 1, 'GREAT': 1, 'ETC': 1, 'AFTERNOON': 1, 'RINK': 1, 'FLOATS': 1, 'COLLEGE': 1, 'SLOW': 1, 'DRIVING': 1, 'HOUR': 1, 'NO': 1, 'CORRIDOR': 1, 'BETTER': 1, 'DUMPED': 1, 'KNOWN': 1, 'BELIEVE': 1, 'TALK': 1, 'SEEING': 1, 'DIFFERENT': 1, 'NOBODY': 1, 'OPPOSITE': 1, 'GERMAN': 1, 'REALIZING': 1, 'MILITARY': 1, 'HERE': 1, 'N': 1, 'ROOM': 1, 'FRANCISCO': 1, '1ST': 1, 'EMOTIONAL': 1, 'ENVIRONMENTS': 1, 'WENT': 1, 'CARD': 1, 'TYPICAL': 1, 'KNOWING': 1, 'RUN': 1, 'WINTER': 1, 'SITTING': 1, 'PURSUE': 1, 'MISSING': 1, 'SINGLE': 1, 'EARLY': 1, 'MET': 1, 'DECIDED': 1, 'FRIEND': 1, 'BOYFRIENDS': 1, 'BALCONY': 1, 'EVERYTHING': 1, 'FOREVER': 1, 'VACANT': 1, 'PARTICULARLY': 1, 'LIKEWISE': 1, 'CURRENTLY': 1, 'TWO': 1, 'LOL': 1, 'TAKEOUT': 1, 'FEET': 1, 'LOS': 1, 'TRUEST': 1, '5AM': 1, 'HUGGING': 1, 'GOODBYE': 1, 'LIVING': 1, 'DATE': 1, 'WEEKS': 1, 'HAVING': 1, 'CIGARETTES': 1, 'CAR': 1, 'BOTH': 1, 'REALIZED': 1, 'SOMEONE': 1, 'NORTH': 1, 'PASS': 1, 'DEEPLY': 1, 'VACATION': 1, 'INEVITABLE': 1, 'HOURS': 1, 'PLATFORM': 1, 'SAND': 1, '5': 1, 'NOSE': 1, 'ANOTHER': 1, 'REGRETTED': 1, 'CALLED': 1, 'EXOTIC': 1, 'NEEDED': 1, 'UNDERWEAR': 1, 'FELT': 1, 'PLATONIC': 1, 'WATCHING': 1, 'CLASSIC': 1, 'PERIOD': 1, 'FINALLY': 1, 'REGULAR': 1, 'WAKE': 1, 'DUNE': 1, 'FORWARD': 1, 'SERIOUS': 1, 'DRINKING': 1, 'BUTTERFLIES': 1, 'MORALITY': 1, 'CITY': 1, 'STOMACH': 1, 'FILMING': 1, 'ALWAYS': 1, 'INSIDE': 1, 'WATCH': 1, 'SAME': 1, 'ALREADY': 1, 'BEING': 1, 'FEELS': 1, 'HELLA': 1, 'YEARS': 1, 'NERVE': 1, 'DROVE': 1, 'ARO': 1}]

//day of week


for (var i = 0; i<words.length; i++) {
r.text(words[i].word, (75+Rune.random(1,600)),(75+Rune.random(1,650)))
  .fill("#FA6CAC")
  .stroke(false)
  .fontSize(words[i].size*15)
  .textAlign("center")
  .fontFamily("Montserrat")
  // .textDecoration("underline")
  .fontWeight("bold");
}

r.draw();