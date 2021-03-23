// Najveci zajednicki delilac
var x = 27;
var y = 49;
var d = 27;
while ((x % d != 0) && (y % d != 0)) {
    d = d - 1;

}
console.log(d);

var a = [9, 45, 23, 7, 8];
var min = a[0];
for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        var index;
    }
}
console.log(min);
var d = min;
for (var i = 0; i < a.length; i++) {
    if (a[i] % d != 0) {
        d = d - 1;
    }

}
console.log(min);

var a = [2, 4, 71, 9, 4, 9, 12, 23, 34, 5, 7, 8, 90];
var i = 3;
var n = a.length;
function maxSumArray(i, a) {
    var m = 0; var s = 0;
    for (var j = i; j < n; j++) {
        s += a[j];
        if (m < s) {
            m = s;
        }
    }
    return m;

}
var e = maxSumArray(i, a);
console.log(e);
// Maksimalna suma podniza, poboljsana varijanta
var a = [12, 34, 54, 2, 3, 1, 7, 89];
function maxSumArrayBest(a) {
    var max = 0;
    for (var i = 1; i < a.length; i++) {
        for (var j = i; j < a.length;) {
            var s = s + a[j];

        }
        if (max < s) {
            max = s;
        }
    }
    return max;
}
var es = maxSumArrayBest(a);
console.log(es);