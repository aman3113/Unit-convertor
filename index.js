/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let number = inputEl.value;
  lengthEl.textContent = `
    ${number} meters = ${(number * 3.281).toFixed(
    3
  )} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters
  `;

  volumeEl.textContent = `
    ${number} liter = ${(number * 0.264).toFixed(
    3
  )} gallon | ${number} gallon = ${(number / 0.264).toFixed(3)} liter
  `;

  massEl.textContent = `
    ${number} kilogram = ${(number * 2.204).toFixed(
    3
  )} pound | ${number} pound = ${(number / 2.204).toFixed(3)} kilogram
  `;
});
