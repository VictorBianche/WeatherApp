// patterns API
const api_link = 'http://api.weatherapi.com/v1/current.json?key=';
const api_key = 'b59319a383204b5483f13659221701&q=';
// Geo Localization setup
let sucess = (pos) => crd = pos.coords;

navigator.geolocation.getCurrentPosition(sucess);
// Api link builder
clique();

function montaLink(){
    link_final = api_link + api_key + crd.latitude + ',' + crd.longitude;
    console.log(link_final)};

function clique(){
    document.getElementById("btn").onclick = montaLink
};









