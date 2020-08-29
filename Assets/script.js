// Assignment Code
const generateBtn = document.querySelector("#generate");
const upperBox = document.querySelector("#checkUpper");
const lowerBox = document.querySelector("#checkLower");
const numBox = document.querySelector("#checkNum");
const symBox = document.querySelector("#checkSym");

const slider = document.querySelector(".range-slider");
const sliderValue = document.querySelector(".range-slider__title");

// Arrays
const symChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
  let pwdArray = [];
  if (upperBox.checked) {
    pwdArray += upperChar;
  }
  if (lowerBox.checked) {
    pwdArray += lowerChar;
  }
  if (numBox.checked) {
    pwdArray += numChar;
  }
  if (symBox.checked) {
    pwdArray += symChar;
  }
  return pwdArray;
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listeners
slider.querySelector("input").addEventListener("input", event => {
  sliderValue.setAttribute("data-length", event.target.value);
});
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);