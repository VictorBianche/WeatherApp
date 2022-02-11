// patterns
const apiLink = 'http://api.weatherapi.com/v1/current.json?key=';
const apiKey = 'b59319a383204b5483f13659221701&q=';
const requestButton = document.getElementById("btn")

// Geo Localization setup
let sucess = (positions) => coordinates = positions.coords;
let error = (positions) => requestButton.setAttribute('disabled', 'disabled'); 
navigator.geolocation.getCurrentPosition(sucess, error)

// Api link builder
function linkBuilder(){
    finalLink = `${apiLink}${apiKey}${coordinates.latitude},${coordinates.longitude}`;
    return finalLink
};
requestButton.onclick = async function Atribui(){
    const response = await fetch(linkBuilder());
    const data = await response.json();
    const { temp_c } = data.current
    const { text } = data.current.condition
    const { name } = data.location
    document.getElementById('location').textContent = `Your current location: ${name}`
    document.getElementById('temperature').textContent =  `Live Temperature: ${temp_c}ºC`
}

