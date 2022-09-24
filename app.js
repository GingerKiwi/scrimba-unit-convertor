/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let toconvert = document.getElementById('input-to-convert');
let convertBtn = document.getElementById("btn-convert")

let lengthAnswer = document.getElementById('answer-length')
let volumeAnswer = document.getElementById('answer-volume')
let massAnswer = document.getElementById('answer-mass')

convertBtn.addEventListener("click", function() {
    // Length Function //
    lengthAnswer.innerHTML = 
        `${toconvert.value} meters = ${Number((toconvert.value * 3.281).toFixed(3))} feet |
        ${toconvert.value} feet = ${Number((toconvert.value / 3.281).toFixed(3))} meters`
    // Volume Function: 1 liter = 0.264 gallon
    volumeAnswer.innerHTML = 
        `${toconvert.value} liters = ${Number((toconvert.value * 0.264).toFixed(3))} gallons |
        ${toconvert.value} gallons = ${Number((toconvert.value / 0.264).toFixed(3))} liters`
    // Mass Function: 1 kilogram = 2.204 pound
    massAnswer.innerHTML = 
        `${toconvert.value} kilograms = ${Number((toconvert.value * 2.204).toFixed(3))} pounds |
        ${toconvert.value} pounds = ${Number((toconvert.value /2.204).toFixed(3))} kilograms`
})
