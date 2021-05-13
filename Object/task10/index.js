
(function () {

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        number = number || Math.floor(Math.random() * (100 - 10) + 10);
        category = category || "e";

        this.number = number;
        this.category = category.toUpperCase();
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category;
    }

    function Passenger(person, seat) {
        if (!(person instanceof Person)) {
            console.log("Insert a valid person");
            return;
        } else {

            this.person = person;
        }

        if (!(seat instanceof Seat)) {
            console.log("Please insert a valid seat");
            return;
        } else {
            this.seat = seat;
        }

    }

    Passenger.prototype.changeSeatCategoryOutput = function () {
        if (this.seat.category === "B") {
            return this.seat.category = "bussiness";
        } else {
            return this.seat.category = "economy";
        }
    }

    Passenger.prototype.getData = function () {
        return this.seat.number + ", " + this.changeSeatCategoryOutput() + ", " + this.person.getData();
    }

    function Flight(relation, date) {

        this.relation = relation;
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfPassengers = [];
        
    }

    Flight.prototype.addPassenger = function (passenger) {

        try {
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                if (this.listOfPassengers[i].seat.number === passenger.seat.number)

                    throw passenger.person.name + "'s seat number is already taken"
            }
        } catch (err) {
            console.log(err);
            passenger.seat.number = Math.floor(Math.random() * (100 - 10) + 10);
        }

        try {
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                if (passenger.person.getData() === this.listOfPassengers[i].person.getData())
                    throw "There is already a person with that name on the list"
            }
        } catch (err) {

            console.log(err);
            this.listOfPassengers[i] = passenger;
        }

        try {
            this.listOfPassengers.push(passenger);
            if (this.listOfPassengers.length > 100)

                throw "There can be only 100 passengers"
        } catch (err) {
            console.log(err);
            this.listOfPassengers.pop();
        }

    }

    Flight.prototype.totalInBussiness = function () {

        var counter = 0;
        this.listOfPassengers.forEach(function (passenger) {
            if (passenger.seat.category === "bussiness") {
                counter++;
            }
        })
        return counter;
    }

    Flight.prototype.getData = function () {
        var output = "";
        var passOutput = "";
        this.listOfPassengers.forEach(function (passenger) {
            passOutput += "\t" + "\t" + passenger.getData() + "\n";

        })
        output = this.date + ", " + this.relation + ". In bussiness category: " + this.totalInBussiness() + "\n";

        return output + passOutput;
    }


    function Airport(name) {

        this.name = name;
        this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {

        return this.listOfFlights.push(flight);
    }

    Airport.prototype.getData = function () {
        var output = "";
        var flightOutput = "";
        var totalNumberOfPassengers = 0;
        var totalNumberOfPassengersInBussiness = 0;

        this.listOfFlights.forEach(function (flight) {
            totalNumberOfPassengers += flight.listOfPassengers.length;
            totalNumberOfPassengersInBussiness += flight.totalInBussiness();
        })
        this.listOfFlights.forEach(function (flight) {

            flightOutput += "\t" + flight.getData() + "\n";

        })

        output = "Airport: " + this.name + ", " + "total number of passengers: " + totalNumberOfPassengers + ".Total in bussiness: " + totalNumberOfPassengersInBussiness + "\n";
        return output + flightOutput;

    }


    function createFlight(relation, date) {
        var createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        var createdPerson = new Person(name, surname);
        var createdSeat = new Seat(seatNumber, category);
        var createdPassenger = new Passenger(createdPerson, createdSeat);

        return createdPassenger;
    }

    // Persons
    var johnSnow = new Person("John", "Snow");
    var cercei = new Person("Cercei", "Lannister");

    // Seats
    var johnseat = new Seat(12, "b");
    var cerceiseat = new Seat(48, "e");

    // Passengers

    var pass1 = createPassenger("John", "Snow", 1, "b");
    var pass2 = createPassenger("Cercei", "Lannister", 1, "b");
    var pass3 = createPassenger("Daenerys", "Targaryen", 14);
    var pass3 = createPassenger("Daenerys", "Targaryen", 56);
    var pass4 = createPassenger("Tyrion", "Lannister");


    // Flights

    var flight1 = createFlight("Belgrade-Paris", "Oct 25 2017");
    var flight2 = createFlight("Belgrade-New York", "11.11.2017");

    flight1.addPassenger(pass1);
    flight1.addPassenger(pass2);
    flight2.addPassenger(pass3);
    flight2.addPassenger(pass4);

    flight1.numberOfPassengers = flight1.listOfPassengers.length;
    flight2.numberOfPassengers = flight2.listOfPassengers.length;

    // Airport
    var airport1 = new Airport("Nikola Tesla");

    airport1.addFlight(flight1);
    airport1.addFlight(flight2);


    console.log(airport1.getData());

})();