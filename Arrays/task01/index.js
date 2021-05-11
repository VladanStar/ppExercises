var fruits = ["apple", "banana", "pineapple", "wathermelone", "kiwi"];
for (var fruit of fruits) {
    console.log(fruit);
}
fruits.forEach(function (item, index, array){
    console.log(item, index);
} );