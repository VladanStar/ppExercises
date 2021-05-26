var main = (function () {
  var randomNum = function () {
    var ranNum = Math.floor((90000 - 10000) * Math.random()) + 10000;
    return ranNum;
  };
  function Product(name, price, expDate) {
    this.id = randomNum();
    this.name = name;
    this.price = price;
      this.expDate = new Date(expDate);
      
    this.getInfo = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase() +
        this.id +
        ", " +
        this.name +
        ", " +
        this.price.toFixed(2)
      );
    };
  }
  //////////////////////////////////////
  function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (product) {
      var currentDate = new Date();
      if (currentDate < product.expDate) {
        this.listOfProducts.push(product);
      }
    };
    this.avgPrice = function () {
      var average = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        average += this.listOfProducts[i].price;
      }
      return (average / this.listOfProducts.length).toFixed(3);
    };
    this.getMostExpensive = function () {
      var mostExp = this.listOfProducts[0].price;
      var index = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        if (mostExp < this.listOfProducts[i].price) {
          mostExp = this.listOfProducts[i].price;
          index = i;
        }
      }
      return this.listOfProducts[index].getInfo();
    };
    this.totalPrice = function () {
      total = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        total += this.listOfProducts[i].price;
      }
      return total;
    };
  }
  ////////////////////////////////////
  function PaymentCard(balance, status, vaildUntil) {
    this.balance = balance.toFixed(2);
    this.status = status;
    this.vaildUntil = new Date(vaildUntil);
  }
  //////////////////////////////////
  function checkOutAndBuy(bag, card) {
    this.price = korpa.totalPrice();
    this.cardBalance = parseFloat(kartica.balance);

    if (this.cardBalance > this.price) {
      return "Purchase is completed succsesfully";
    } else {
      return (
        (price - cardBalance).toFixed(2) +
        "$ is missing to complete the purchase"
      );
    }
  }
  //////////////////////////////
  var proizvod = new Product("Banana", 123.4588, "2020-05-24");
  console.log(proizvod.getInfo());
  var proizvod2 = new Product("Ariel", 754.45874, "2025-05-24");
  console.log(proizvod2.getInfo());

  var korpa = new ShoppingBag();
  korpa.addProduct(proizvod);
  korpa.addProduct(proizvod2);
  console.log(korpa.getMostExpensive());

  var kartica = new PaymentCard(500, "active", "04/01/20");

  checkOutAndBuy(korpa, kartica);
  console.log(checkOutAndBuy());
})();
