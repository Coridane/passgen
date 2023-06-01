// Look at the "generate" button and, when clicked, initiate startPrompt.
document.querySelector("#generate").addEventListener("click",startPrompt);

//  Declarations.
var length = "";
var lower;
var upper;
var number;
var special;

// Arrays of Requirements.
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var anyNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCharacter = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"];

// Prompt to declare the length of the password.
function generate() {
  var length = (prompt("How many characters?"));

// Enforce minimum and maximum length (if less than 8 OR greater than 128).
  while(length < 8 || length > 128) {
    alert("The length cannot be less than 8 characters or greater than 128 characters.");
    var length = (prompt("How many characters?"))
  }

// Prompts to declare other requirements.
  var lower = confirm("Click OK to include lowercase characters");
  var upper = confirm("Click OK to include uppercase characters");
  var number = confirm("Click OK to include numeric characters");
  var special = confirm("Click OK to include special characters");

// Enforce at least one of these requirements.
  while(lower === false && upper === false && number === false && special === false) {
    alert("You must click OK (Yes) for at least one requirement.")
  var lower = confirm("Click OK to include lowercase characters");
  var upper = confirm("Click OK to include uppercase characters");
  var number = confirm("Click OK to include numeric characters");
  var special = confirm("Click OK to include special characters");
  }

// Create a blank array to store all chosen arrays (the if statements below will
//fill it).
  var characterPool = []

// If the user clicked OK to lowercase characters, add everything from the
//lowerAlpha array to the characterPool array.
if (lower) {
  characterPool = characterPool.concat(lowerAlpha)
}

// If the user clicked OK to uppercase characters, add everything from the
//upperAlpha array to the characterPool array.
if (upper) {
  characterPool = characterPool.concat(upperAlpha)
}

// If the user clicked OK to numeric characters, add everything from the
//anyNumeric array to the characterPool array.
if (number) {
  characterPool = characterPool.concat(anyNumeric)
}

// If the user clicked OK to special characters, add everything from the
//spCharacter array to the characterPool array.
if (special) {
  characterPool = characterPool.concat(spCharacter)
}

// Log the the characterPool array that is now filled with all possible characters.
console.log(characterPool)

// Establish a new, blank variable to store the password.
var generatedPwd=""

// This is a for loop that is going to run for the length defined by the user.
// For example, if the user entered 8, i starts at 0, finds that 0 is less than 8,
// adds 1 to i, and executes. Eventually i will equal 8 and stop executing.
for (var i=0; i < length; i++) {
// This next row is randomly pulling a character from the characterPool array.
// Breakdown: Math.random is generating a random decimal and multiplying that
// times the length of the "characterPool" array (52), and Math.floor is rounding
// that decimal to a whole number and look at that index for the character.
  console.log(Math.random() * characterPool.length)
  generatedPwd = generatedPwd + characterPool[Math.floor(Math.random() * characterPool.length)];  
  console.log(generatedPwd)
}
  return generatedPwd;
}

function startPrompt() {
// Generate a password which starts with a series of prompts (generate function).
  var password = generate();
// Select the box (password) and equate that to the output variable.
  var output = document.querySelector("#password");
// Output the value of the previous variable (var password).
  output.value = password;
}

// (Extra) Look at the "generate" button and, when clicked, initiate showBtn.
document.querySelector('#generate').addEventListener('click', showBtn);

// Change the display property to: block. In the CSS, it was: none.
function showBtn(e) {
  document.querySelector('#copy').style.display = 'block'  
}

// 
function copyPassword() {
  // Create variable called copyText which will represent the box (password).
  var copyText = document.querySelector('#password');

// Select the text in the box (password).
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text to clipboard.
  navigator.clipboard.writeText(copyText.value);

// Show an alert with the copied text.
  alert("Copied the text: " + copyText.value);
}