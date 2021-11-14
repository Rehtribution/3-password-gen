// Assignment code here
function generatePassword() {

  //this log will confirm that the button is functional in the dev tools
  console.log("generate click");

//setting the boolian values to false and numeric to allow future input
  var length = 0
  var isNumeric = false
  var isUpper = false
  var isLower = false
  var isSpecial = false

  //prompt user for pass criteria
  //password 8 < length >128. This while loop will circle around untill a valid number is input.
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(window.prompt('Choose a passsword length between 8-128'))
  }


  //validate selections. this while loop with circle around until at least one selection is made.
  while (!(isNumeric || isUpper || isLower || isSpecial)) {
    isNumeric = window.confirm('Include numbers?')
    isUpper = window.confirm('Include uppercase?')
    isLower = window.confirm('Include lowercase?')
    isSpecial = window.confirm('Include special characters?')
  }

  //character types. setting the string values for all potential characters
  var characterSet = ''
  if (isNumeric) characterSet += ('0123456789')
  if (isUpper) characterSet += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if (isLower) characterSet += ("abcdefghijklmnopqrstuvwxyz")
  if (isSpecial) characterSet += (" !@#$%^&*()=+-")


  //generate password using built in math functions applied to the charactersets
  var newPassword = ''
  for (let i = 0; i < length; i++) {
    newPassword = newPassword.concat(
      characterSet.charAt(Math.floor(Math.random() * characterSet.length))
    )
  }

  //display to page
  return newPassword
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
