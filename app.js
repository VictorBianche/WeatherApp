// patterns API
const apiLink = 'http://api.weatherapi.com/v1/current.json?key=';
const apiKey = 'b59319a383204b5483f13659221701&q=';
const isDisabled = true;

const btn = document.getElementById("btn")
//btn.setAttribute('disabled', false)

// Geo Localization setup
let sucess = (pos) => crd = pos.coords;
navigator.geolocation.getCurrentPosition(sucess)
    //.then(btn.setAttribute('disabled', true));


    // Api link builder
function montaLink(){
    linkFinal = `${apiLink}${apiKey}${crd.latitude},${crd.longitude}`;
    return linkFinal
};
btn.onclick = function Atribui(){
    fetch(montaLink())
        .then(T => T.json())
        .then(console.log)
}


