(function () {
  console.log("Hello Wordl Players. The game begins!!!!");

  ///////////////////// COUNTRY ////////////////////
  //Create constructor functions with properties representing the following:
  //● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
    // metod za country
    this.getData = function () {
      return this.name + " " + this.odds + " " + this.continent;
    };
  }
  var continent = Object.freeze({
    EUROPA: "EU",
    ASIA: "AS",
    SAUTH_AMERICA: "SA",
    NORT_AMERICA: "NA",
    AUSTRALIA: "AU",
  });

  ////////// PERSON ////////////////////
  // Person - name, surname, date of birth
  // Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.currentDate = new Date().getFullYear();
    this.yearOld = function () {
      return (this.currentDate = new Date(dateOfBirth).getFullYear());
    };
    this.getDateOfBirth = function () {
      return (
        new Date(date).getDate() +
        "." +
        new Date(date).getMonth() +
        "." +
        new Date(date).getFullYear()
      );
    };
    this.getData = function () {
      return this.name + " " + this.surname + " " + this.yearOld();
    };
  }
  ///////////  ADDRESS   ////////////////////////
  //Address - country, city, postal code, street and number
  // Add a method to Address that returns a formatted string like the following one:
  // 	Nemanjina 4, 11000 Beograd, SR

  function Address(street, postalCode, city, country) {
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    this.fullAddress = function (country) {
      return (
        this.street +
        ", " +
        this.postalCode +
        ", " +
        this.city +
        ", " +
        country.getData()
      );
    };
  }
  ///////////  PLAYER   ////////////////////////
  //Player - person, bet amount, country (instance of Country)
  // Add a method to Player that returns a formatted string containing a country,
  //expected win amount(odds * bet amount) and person data.
  // SR, 1050.00 eur, Pera Peric, 29 years

  function Player(person, betAmout, country) {
    this.person = person;
    this.betAmout = betAmout;
    this.country = country;
    this.getData = function (person, country) {
      return (
        this.country.getData() +
        ", " +
        this.betAmout * this.country.odds +
        ", " +
        this.person.getData()
      );
    };
  }
  // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
  // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
  // Add a method to BettingPlace that adds a player to the players list of a betting place.

  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.sumOfAllBets = function () {
      var result = 0;
      this.listOfPlayers.forEach(function (element) {
        result += element.betAmout;
      });
      return result;
    };
    this.sumAllBets = function () {
      var result = 0;
      this.listOfPlayers.forEach(function (element) {
        result += element.betAmout * element.country.odds;
      });
    };
    this.addPlayer = function (player) {
      this.listOfPlayers.push(player);
    };
    this.getData = function () {
      return (
        this.address.street +
        ", " +
        this.address.postalCode +
        ", " +
        this.address.city +
        ", " +
        " sum of all methods " +
        this.sumOfAllBets()
      );
    };
  }

  // Create an instance of the BettingHouse that receives the name of competition.
  // Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

  // Display all betting house data in the following manner:
  // Football World Cup Winner, 2 betting places, 4 bets
  // 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
  // 		GR, 1050.00 eur, Pera Peric, 29 years
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // There are 3 bets on Serbia

  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.sumAllBets = 0;
    this.numberOfPlayers = 0;

    this.addBettingPlace = function (BettingPlace) {
      this.listOfBettingPlaces.push(BettingPlace);
      this.numberOfPlayers = BettingPlace.listOfPlayers.length;
      this.sumAllBets = BettingPlace.sumAllBets();
    };
    this.getData = function () {
      var firstLine =
        this.competition +
        ", " +
        this.listOfBettingPlaces.length +
        " betting places " +
        this.numberOfPlayers;
      var secondLine = "";

      for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        secondLine += "\n\t" + this.listOfBettingPlaces[i].getData();
        var beet = this.listOfBettingPlaces[i];
        beet.listOfPlayers.forEach(function (element) {
          secondLine += "\n\t\t" + element.getData();
        });
      }

      return firstLine + secondLine;
    };
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  //Pravimo instance za drzavu, unosimo ime drzave, kvotu i kontinent sa kojeg je drzava;
  var serbia = new Country("Serbia", 3, continent.EUROPA);
  var china = new Country("China", 3, continent.ASIA);
  //console.log(serbia.getData());
  //console.log(china.getData());

  // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
  // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
  // Add a method to BettingPlace that adds a player to the players list of a betting place.

  //Pravimo instancu osobe ime i prezime, starost;
  var vladan = new Person("Vladan", "Cupric", "1973-03-11");
  var nemanja = new Person("Nemanja", "Petrika", "1986-05-13");
  var boban = new Person("Boban", "Stojanovic", "1984-12-5");
  var milorad = new Person("Milorad", "Petrika", "1978-04-13");
  //console.log(vladan.getData());
  //console.log(nemanja.getData());

  //Pravimo instancu dve adrese;
  //  function Address(street, postalCode, city, country) {
  var address = new Address(
    "Generala Birjukova 2",
    "11070",
    " Novi Beograd",
    serbia
  );
  var address1 = new Address(
    "Bate Zivojinovica Valtera 2341/9",
    " NaN",
    "Beijing",
    china
  );
  address.fullAddress(serbia);
  address1.fullAddress(china);

  console.log(address.fullAddress(china));

  //Pravimo instancu igraca
  var player1 = new Player(vladan, 1200, serbia);
  var player2 = new Player(boban, 2000, china);
  var player3 = new Player(nemanja, 4000, serbia);
  var player4 = new Player(milorad, 45000, serbia);
  player1.getData(vladan, serbia);
  player2.getData(boban, china);
  player3.getData(nemanja, serbia);
  player4.getData(milorad, serbia);

  var betPlace = new BettingPlace(address);
  var betPlace1 = new BettingPlace(address1);
  betPlace.addPlayer(player1);
  betPlace.addPlayer(player2);
  betPlace1.addPlayer(player3);
  betPlace1.addPlayer(player4);
  // console.log(betPlace.getData());

  var betHouse = new BettingHouse("Mozzart Kladionica");
  betHouse.addBettingPlace(betPlace);
  betHouse.addBettingPlace(betPlace1);
  console.log(betHouse.getData());
})();
