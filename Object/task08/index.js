var personObjecat = new Object();
personObjecat.ime = "Vladan";
personObjecat.age = 48;
personObjecat.telefon = 0601531174;
personObjecat.prikaziIme = function () {
  console.log("Ime osobe je: " + this.ime);
};
var personObjecat = {
  ime: "Vladan",
  age: 48,
  telefon: {
    mobilni: 0601531174,
    fiksni: 034312413,
  },
};
const automobilB = {
  ime: "Fiat",
  model: 500,
  težina: 850.0,
  boja: "bela",
  pokreni: function () {
    console.log("Automobil je uključen");
  },
  vozi: function () {
    console.log("Automobil je u pokretu");
  },
  zakoči: function () {
    console.log("Automobil je stao");
  },
  ugasi: function () {
    console.log("Automobil je ugašen");
  },
};
console.log(typeof automobilB);
console.log(automobilB);
//---------------------------------------------------------------
const automobil = {
  ime: "Fiat",
  model: 500,
  težina: 850.0,
  boja: "bela",
  pokreni: function () {
    console.log("Automobil je uključen");
  },
  vozi: function () {
    console.log("Automobil je u pokretu");
  },
  zakoči: function () {
    console.log("Automobil je stao");
  },
  ugasi: function () {
    console.log("Automobil je ugašen");
  },
  uspori: function () {
    console.log("Automobil je usporio");
  },
};
console.log("Početak ulice");
automobil.pokreni();
automobil.vozi();
console.log("Raskrsnica sa prvenstvom prolaza");
automobil.uspori();
console.log("Prvi semafor");
automobil.zakoči();
automobil.vozi();
console.log("Drugi semafor");
automobil.zakoči();
automobil.vozi();
console.log("Kraj ulice");
automobil.zakoči();
automobil.ugasi();
//-------------------------------------------
const automobilA = {
  ime: "Fiat",
  model: 500,
  težina: 850.0,
  boja: "bela",
  pokreni: function () {
    console.log("Automobil je uključen");
  },
  vozi: function () {
    console.log("Automobil je u pokretu");
  },
  zakoči: function () {
    console.log("Automobil je stao");
  },
  ugasi: function () {
    console.log("Automobil je ugašen");
  },
  ispisi_informacije: function () {
    console.log(
      "Ime: " +
        this.ime +
        ", model: " +
        this.model +
        ", težina: " +
        this.težina +
        "kg" +
        ", boja: " +
        this.boja
    );
  },
};

automobilA.ispisi_informacije();
/* Kreirati promenljivu `studenti` koja treba da sadrži podatke o studentima iz naredne tabele. Koristiti odgovarajuće tipove podataka za predstavljanje datih vrednosti. Ova promenljiva se koristi u narednim zadacima.*/

function Student(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.getString = function () {
    return (
      "Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "ID: " + this.id
    );
  };
}

function Subject(name, description) {
  this.name = name;
  this.description = description;
  this.getString = function () {
    return "Name: " + this.name + "\n" + "Description: " + this.description;
  };
}

function Classroom(name) {
  this.name = name;
  this.subjects = [];
  this.students = [];
  this.addSubject = function (subj) {
    this.subjects.push(subj);
  };
  this.addStudent = function (stud) {
    this.students.push(stud);
  };
  this.toString = function () {
    var dataString = "";
    for (var i = 0; i < this.subjects.length; i++) {
      dataString += this.subjects[i].getString() + "\n";
    }
    for (var j = 0; j < this.students.length; j++) {
      dataString += this.students[j].getString() + "\n";
    }
    return this.name + "\n" + dataString;
  };
}

var bit = new Classroom("BIT");

var firstStud = new Student("Hirurg", 47, 12345);
var secondStud = new Student("Nenad", 31, 54321);
var thirdStud = new Student("Nikola", 24, 53421);

var firstSubj = new Subject("Web", "Making Modern WebSites");
var secondSubj = new Subject("PP", "About programming principles");
var thirdSubj = new Subject("Industry talk", "About IT Industry");

bit.addStudent(firstStud);
bit.addStudent(secondStud);
bit.addStudent(thirdStud);

bit.addSubject(firstSubj);
bit.addSubject(secondSubj);
bit.addSubject(thirdSubj);

console.log(bit.toString());
