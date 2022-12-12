// Assignment Code

// what is this query selector for?
var generateBtn = document.querySelector("#generate");
console.log("#generate");

// GLOBAL password variable options
var confirmLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "?"];

// GLOBAL confirm variables for prompts
var length = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialchar;

function writePassword() {

// length prompt
var length = prompt("Choose a length between 8-128 characters");
if (length < 8 || length > 128)
{
	writePassword()
  alert("Password length is either too short or too long, try again");
  prompt("Choose a length between 8-128 characters");
}
console.log(length);

// confirming password paramaters
var confirmlowercase = confirm(
  "Click OK if you want to include lowecase letters in your password"
);
var confirmuppercase = confirm(
  "Click OK if you want to include uppercase letters in your password"
);
var confirmnumber = confirm(
  "Click OK if you want to include numbers in your password"
);
var specialChar = confirm(
  "Click OK if you want to include special characters in your password"
);

// need a console.log here

// lowercase
if (confirmLowerCase) {
  passwordText = passwordText.concat(lowercase);
}

// uppercase
if (confirmuppercase) {
  passwordText = passwordText.concat(uppercase);
}

// number
if (confirmnumber) {
  passwordText = passwordText.concat(number);
}

// special character
if (confirmspecialchar) {
  passwordText = passwordText.concat(specialChar);
}
console.log(passwordText);

// If no choices are made
if 
(!confirmlowercase && !confirmuppercase && !confirmnumber && !confirmspecialchar) {
  alert("You must choose a criteria");
  prompt("Try again.");
}

var passwordText = [];

for (var i = 0; i < enter; i++) {
  var Password = passwordText[Math.floor(Math.random() * passwordText.length)];
  password.push(passwordText);
}

// Get random index from array of options

// var computerChoice = passwordText[index];

console.log(passwordText.length);

return passwordText;

// function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
