function CulinareRecipe(
  name,
  type,
  complexity,
  listOfIngrendients,
  preparingTime,
  instuctions
) {
  this.name = name;
  this.type = type;
  this.complexity = complexity;
  this.listOfIngrendients = listOfIngrendients;
  this.preparingTime = preparingTime;
  this.instuctions = instuctions;
  this.change = function (cuisine) {
    return (this.type = cuisine);
  };
  this.is15M = function (preparingTime) {
    var isTime = preparingTime <= 15 ? "Yess" : "No";
    return isTime;
  };
  this.removeI = function (ingredient) {};
}
var piza = new CulinareRecipe(
  "Quatro Staqione",
  "Italy",
  "simple",
  [
    "jaja",
    "pirotski sir",
    "origano",
    "kecap",
    "kackavalj",
    "masline",
    "mleveno meso",
  ],
  13,
  "In the colinary"
);
piza.change("Juzna Srbija");
piza.removeI("masline");
piza.preparingTime = 22;
console.log(piza.is15M(22));

console.log(piza);
