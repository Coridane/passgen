// Assignment Code
var generateBtn = document.querySelector("#generate");

// Input (this will ask the user to define password requirements)

function prompt() {
  var length = prompt("How many characters?");
  var numcount = prompt("How many numbers");
  var special = prompt("How many special characters?");
alert (length)
}









console.log numcount + special

// if (length > numcount+special)
//   var 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
