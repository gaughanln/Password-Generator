// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordmin = 8;
var passwordmax = 128;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

for (var i = 0, 

  passwordText.value = password;

sos

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
