var vladan = {
  name: "Vladan",
  age: 48,
  job: "programer",
  hobby: ["reading books", "playing tennis", "traveling"],
  run: function () {
    console.log(vladan.name + " doesn't run!");
  },
};

var colors = {
  red: "brick",
  blue: "aqua",
};

var movies = {
  comedy: "Mr.Bean",
  horror: "Psycho",
};

vladan.mix = [colors, movies];
console.log(vladan);

// vladan.run();

// console.log(vladan.hobby);

var aleksandar = {
  name: "Aleksandar",
  age: 26,
  job: "student",
  interests: [
    "reading books",
    "making pinatas",
    "listening to music",
    "watching movies",
  ],
  dansing: function () {
    console.log(aleksandar.name + " is not so good at dansing");
  },

  haveFun: function () {
    var result = "";
    for (var i = 0; i < aleksandar.interests.length; i++) {
      result += aleksandar.interests[i] + ", ";
    }
    return result;
  },
};

// console.log(aleksandar.haveFun());
aleksandar.dansing();
// console.log(aleksandar.age);

aleksandar.music = {
  janisJoplin: "Maybe",
  theDoors: "People are strange",
};

console.log(aleksandar);
var person = {
  name: "Vladan",
  afe: 48,
  gender: "male",
  displayName: function () {
    alert(this.name);
  }
};
