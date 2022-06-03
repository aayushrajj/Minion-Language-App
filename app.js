// console.log("A seperate JS file used");

// //input
// var username = prompt("Give me your username");

// //processing
// var welcomeMessage = "This script works! " + username;

// //output
// alert(welcomeMessage);

var btntranslate = document.querySelector("#btn-translate");

btntranslate.addEventListener("click" , clickHandler() );

function clickHandler(){
    console.log(btntranslate);
}