// Assignment Code

// what is this query selector for?
var generateButton = document.querySelector("#generate").addEventListener("click");
// document.querySelector("#generate").addEventListener("click");
   
// need to add a console.log here


// password variable options
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "?"];

// confirm variables for prompts
var length = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialchar;


// Write password to the #password input
function writePassword() {
  // do we need the code below? It came already provided...
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var length = (prompt("Choose a length between 8-128 characters"));
    while (length <= 8 || length >= 128); 
     {
    alert("Password length is either too short or too long, try again");
      var length = (prompt("Choose a length between 8-128 characters"));
    }
  }
  console.log(writePassword)
// need a console.log here

    // var confirmlowercase = confirm("Click OK if you want to include lowecase letters in your password");
    
    
    // else {
    //   var confirmlowercase = confirm("Would you like to include lowercase letters?")
    // }
    console.log(writePassword)


  return password;



 

  
  passwordText.value = password;


    
    
      

  
// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
document.getElementById("#generate").addEventListener("click");
console.log("#generate");

// need prompts for : Password length, confirm whether or not to include lowercase, uppercase, numeric, and/or special characters - this is 5 total prompts

// once propmpts are created input should be validated

// password is displayed in an alert at the end