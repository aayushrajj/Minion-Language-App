// console.log("A seperate JS file used");

// //input
// var username = prompt("Give me your username");

// //processing
// var welcomeMessage = "This script works! " + username;

// //output
// alert(welcomeMessage);


// // The querySelector() method returns the first element that matches a CSS selector.
// document.querySelector("text-area");

// // this way we select first occuring class with same name
// .btn-primary 

// // this way we select first occuring id with same name
// #input-btn

// //  this way we select 'input' element with an attribute name='translator' ; [] is attribute selector
// document.querySelector("input[name='translator']");



// var outputDiv = document.querySelector("#output");
// var textInput = document.querySelector("#text-input");
// outputDiv.innerText = "Ayush Raj";
// console.log(outputDiv);

// console.log(textInput);

// function clickHandler(){
//     console.log("Clicked!");
//     console.log("Input--> " , textInput.value);
//     outputDiv.innerText = "sn&&fui##22@@!!  " + textInput.value;

// }




var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){

}

function clickHandler(){
    outputDiv.innerText = "sn&&fui##22@@!!  " + textInput.value; 
}

btntranslate.addEventListener("click" , clickHandler);



