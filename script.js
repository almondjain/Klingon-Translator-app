const InputText = document.querySelector(".textarea-section");
const OutputText = document.querySelector(".output");
const TranslateButton = document.querySelector(".translate-btn");
const url = "https://api.funtranslations.com/translate/klingon.json";

function errorHandler(error){
    alert("Error occur: Please try again!")
}


function getTranslationURL(input){
    return url + "?text=" + input;
}

function handleClick(){
    //taking input
    var input = InputText.value;
    
    fetch(getTranslationURL(input)).then(
        response => response.json()
    ).then(
        json=> {
            var translatedText = json.contents.translated;
            OutputText.innerText = translatedText;
        }
    ).catch(errorHandler) 
};

TranslateButton.addEventListener("click",handleClick);