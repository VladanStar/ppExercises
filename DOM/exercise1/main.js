var ulFirst = document.querySelectorAll("ul")[0];

function setColorToUl() {
  var ulSecond = document.querySelectorAll("ul")[1];
  ulSecond.style.background = "lightgreen";
}

function getAllLi(selector, className) {
  var allLi = document.querySelectorAll(selector);
  for (var i = 0; i < allLi.length; i++) {
    allLi[i].className = className;
  }
}

function selectLastUl() {
  var lastUlLi = document.querySelectorAll("ul:last-Of-Type>li");
  for (var i = 0; i < lastUlLi.length; i++) {
    lastUlLi[i].className = "color-and-text-li";
  }
}

setColorToUl();
getAllLi("li", "color-li");
selectLastUl();
/*

var changeBackground = document.getElementById('nesto').className = "classWithBackgroundColor"
<html>
    <head>
        <title>DOM</title>
        <style>
            .classWithBackgroundColor {
                background-color: blueviolet;
            }
            .nesto{
                background-color: black;
            }
        </style>
    </head>
    <body>
        <ul id="nesto">
            <li>bread</li>
            <li>milk</li>
            <li>sugar</li>
        </ul>
        <ul>
            <li>sunglasses</li>
            <li>towel</li>
            <li>umbrella</li>
        </ul>
    </body>
    <script src="dom_exercise.js"></script>
</html>
prva poruka u JS dokument
druga u html

*/