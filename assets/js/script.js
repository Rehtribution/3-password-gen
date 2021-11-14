// Assignment code here

function generatePassword() {
  console.log("generate click");

  var length = 0
  var isNumeric = false
  var isUpper = false
  var isLower = false
  var isSpecial = false

  //prompt user for pass criteria
  //password length 8 < 128
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(window.prompt('Choose a passsword length between 8-128'))
  }


  //validate selections
  while (!(isNumeric || isUpper || isLower || isSpecial)) {
    isNumeric = window.confirm('Inclusde numbers?')
    isUpper = window.confirm('Include uppercase?')
    isLower = window.confirm('Inslude lowercase?')
    isSpecial = window.confirm('Include special characters?')
  }

  //character types
  var characterSet = ''
  if (isNumeric) characterset += char('0123456789')
  if (isUpper) characterset += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if (isLower) characterset += ("abcdefghijklmnopqrstuvwxyz")
  if (isSpecial) characterset += (" !@#$%^&*()=+-")

  var allChar = isNumeric + isUpper + isLower + isSpecial;

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
