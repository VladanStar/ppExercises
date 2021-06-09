function getLi (){
var li = document.getElementById('prvi').textContent;
alert(li);
}
​
function changeText (someText){
    document.getElementById('lista').innerHTML = someText;
}
​
function changeLastText(someLastText) {
    document.getElementById('lista').lastElementChild.innerHTML = someLastText;
}
​
​
function insertDropDown (selectArray, whereToInsertInHTML){
    var dropDownList = '<select name="travel">\n';
    selectArray.forEach(function(selectArrayElement) {
        dropDownList += '<option value="' + selectArrayElement + '">' + selectArrayElement + '</option>\n'; 
    })
    dropDownList += '</select>';
​
    document.getElementById(whereToInsertInHTML).innerHTML = dropDownList ;
}
​
function checkForm () {
    var inputs = document.getElementsByTagName("input");
    console.log(inputs.length);
    //document.getElementById('form').innerHTML = 'PROVERAVAM';
    for (var x = 0; x < inputs.length; x++) {
       if (inputs[x].value === '' && inputs[x].hasAttribute('required')) {
           inputs[x].style.border = "solid red";
      }
   }
}