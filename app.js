

var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    var encodedText = encodeURI(text);
    return serverURL + "?" + "text=" + encodedText
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Too Many Requests! Rate limit of 5 requests per hour exceeded. Please try again after sometime");
}

function clickHandler(){
    // taking input
    var input = textInput.value; 

    var finalURL = getTranslationURL(input);
    
    // calling server for processing
    fetch(finalURL)
        .then( response => response.json() )
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //main output
        })
        .catch(errorHandler) 

}

btntranslate.addEventListener("click" , clickHandler);


