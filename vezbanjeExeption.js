
var deli = function (a,b) {
    try {     
        podeli(a, b);
    }
    catch (ex) {
        console.log("Greška - deljenje nulom!!!");
        console.log(ex.message);
    }
    finally {
        console.log("Uvek se izvršava!!!");
    }
}
 
function podeli(a, b) {
    if (b == 0) {
        throw Error("Deljenje nulom!!!");
    }
    return a / b;
}
console.log("Kraj programa!!!");

deli(2, 0);

