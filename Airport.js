"use strict";
var main = (function () {
  console.log("Hi!");
  ///////////////////Person constructor Function
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + this.surname;
    };
  }
  ///////////////////Seat constructor Function
  function Seat(number, category) {
    if (category === "b" || category === "e") {
      this.number = number;
      this.category = category;
    } else {
      this.number = number;
      this.category = "e";
    }
    if (number === undefined) {
      this.number = Math.round((100 - 10) * Math.random() + 10);
      this.category = "e";
    }
    this.getData = function () {
      return this.number + "," + this.category;
    };
  }

  ///////////////////Passenger constructor Function
  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + "," + this.person.getData() + "\n";
    };
  }

  ///////////////////Flight constructor Function
  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPass = [];
    this.addPassenger = function (personPass) {
      this.listOfPass.push(personPass);
    };
  }

  ///////////////////Airport constructor Function
  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      this.listOfFlights.push(flight);
    };
    this.getData = function () {
      var res = "";
      for (var i = 0; i < this.listOfFlights.length; i++) {
        res +=
          this.listOfFlights[i].date +
          "," +
          this.listOfFlights[i].relation +
          "\n";
        for (var j = 0; j < this.listOfFlights[i].listOfPass.length; j++) {
          res += this.listOfFlights[i].listOfPass[j].getData();
        }
        res += "\n";
      }
      return (
        "Airport : " +
        this.name +
        ", total passengers : " +
        (this.listOfFlights[0].listOfPass.length +
          this.listOfFlights[1].listOfPass.length) +
        "\n" +
        res
      );
    };
  }

  ////////////////////////CreateFlight function
  var createFlight = function (relation, date) {
    return new Flight(relation, date);
  };
  ////////////////////////CreatePassenger function
  var createPassenger = function (name, lastName, number, category) {
    var person = new Person(name, lastName);
    var seat = new Seat(number, category);
    return new Passenger(person, seat);
  };

  // console.log(aerodrom);
  var aerodrom = new Airport();

  // var personInfo = new Person("Nikola", "Nikolic");
  // var seatInfo = new Seat(5, "b");
  // var putnik = new Passenger(personInfo, seatInfo);

  /////////////////Creating Passengers
  var firstPassenger = createPassenger("John", "Snow", 1, "b");
  var secondPassenger = createPassenger("Cersei", "Lannister", 2, "b");
  var thirdPassenger = createPassenger("Daenerys", "Targerian", 14);
  var fourthPassenger = createPassenger("Tyrion", "Lannister");

  //////////////////Creating Flight
  var bgdNy = createFlight("Belgrade- New York", "24.05.2020");
  var barBgd = createFlight("Barcelona - Belgrade", "Nov 11 2017");
  // ruta.addPassenger(putnik);

  // aerodrom.addFlight(ruta);

  bgdNy.addPassenger(firstPassenger);
  bgdNy.addPassenger(secondPassenger);
  barBgd.addPassenger(thirdPassenger);
  barBgd.addPassenger(fourthPassenger);

  aerodrom.addFlight(bgdNy);
  aerodrom.addFlight(barBgd);

  console.log(aerodrom.getData());
})();
