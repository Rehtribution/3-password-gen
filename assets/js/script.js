// Assignment code here

function generatePassword() {
  console.log("generate click");


//variables
var length = 0
var num = ["0123456789"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!@#$%^&*()=+-"];
var allChar = num + upper + lower + special;


//prompt user for pass criteria
  //password length 8 < 128
  //character types
while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(window.prompt('Choose a passsword length between 8-128'))
  }



//validate selections
//generate password
//display to page

  return 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
