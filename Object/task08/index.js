var personObjecat = new Object();
personObjecat.ime = "Vladan";
personObjecat.age = 48;
personObjecat.telefon= 0601531174;
personObjecat.prikaziIme = function () {
    console.log("Ime osobe je: " + this.ime);
};
var personObjecat = {
    ime: "Vladan",
    age: 48,
    telefon: {
        mobilni: 0601531174,
        fiksni:034312413,
    },
};
const automobilB = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
};
console.log(typeof automobilB);
console.log(automobilB);
//---------------------------------------------------------------
const automobil = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
};
console.log('Početak ulice');
automobil.pokreni();
automobil.vozi();
console.log('Prvi semafor');
automobil.zakoči();
automobil.vozi();
console.log('Drugi semafor');
automobil.zakoči();
automobil.vozi();
console.log('Kraj ulice');
automobil.zakoči();
automobil.ugasi();
//-------------------------------------------
const automobilA = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
  ispisi_informacije: function () {
    console.log(
      'Ime: ' +
        this.ime +
        ', model: ' +
        this.model +
        ', težina: ' +
        this.težina +
        'kg' +
        ', boja: ' +
        this.boja
    );
  },
};

automobilA.ispisi_informacije();