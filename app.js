// console.log("A seperate JS file used");

// //input
// var username = prompt("Give me your username");

// //processing
// var welcomeMessage = "This script works! " + username;

// //output
// alert(welcomeMessage);

var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

console.log(textInput);

function clickHandler(){
    console.log("Clicked!");
    console.log("input" , textInput.value);
}

btntranslate.addEventListener("click" , clickHandler);

