/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/
const displaTemperature = temperature => {
    const jumboTron = document.createElement("div")
    const h3 = document.createElement("h3")
    jumboTron.appendChild(jumboTron)

    h3.innerText = "${temperature}ª"
};
const displeyError = () => {
    const jumboTron = document.getElementById ("div")
    const h3 = document.createElementById("h3")
    jumboTron.appendChild(h3)

    const main = document.getElementById("main")
    main.appendChild(jumboTron)

    h3.innerText ="los campos rellenados no son validos"

}

const getButton = document.getElementById("get-button")
getButton.addEventListener("click", () =>{
const latitude = getElementById("latitude").value
const longitude = getElementById("longitude").value

// validar que latitude y longitud existen y los puedo parsear a float

if (latitude && longitude && parseFloat(latitude) && parseFloat(longitude)){
    //Promise funtion
    fetch("ttps://fcc-weather-api.glitch.me/api/current?lat=${latitude)$lon=${longitude}")// nombre
    .then(response => response.json()) // que hacer con la informacion
    .then(json =>{
        const temperature = json.main.temp 
        displaTemperature(temperature)
    })
    .catch(error => console.error(error))
}else{
    displayError()
}
});

function addProduct (Product){
    const body = document.querySelector("body")
    const productDiv = document.createElement("img")
    const productImage =document.createElement("img")
}
