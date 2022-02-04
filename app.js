// patterns API
const api_link = 'http://api.weatherapi.com/v1/current.json?key=';
const api_key = 'b59319a383204b5483f13659221701&q=';
const link = [];
// Geo Localization setup
let sucess = (pos) => crd = pos.coords;

navigator.geolocation.getCurrentPosition(sucess);
// Api link builder

function montaLink(){
    link_final = api_link + api_key + crd.latitude + ',' + crd.longitude;
    return link_final
};

document.getElementById("btn").onclick = function Atribui(){
    link.push(montaLink())


    fetch(link[0])
        .then(T => T.json())
        .then(console.log)
}


