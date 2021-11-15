// Assignment code here
function generatePassword() {

  //this log will confirm that the button is functional in the dev tools
  console.log("generate click");

  //setting the boolian values to false and numeric to allow future input
  var length = parseInt(window.prompt('Choose a passsword length between 8-128'))

  //prompt user for pass criteria
  //password 8 < length >128. This while loop will circle around untill a valid number is input.
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Length must be a number between 8 and 128.")
    length = parseInt(window.prompt('Choose a passsword length between 8-128'))
  }

  var isNumeric = window.confirm('Include numbers?')
  var isUpper = window.confirm('Include uppercase?')
  var isLower = window.confirm('Include lowercase?')
  var isSpecial = window.confirm('Include special characters?')

  //validate selections. this while loop with circle around until at least one selection is made.
  while (!(isNumeric || isUpper || isLower || isSpecial)) {
    alert("You must choose at least one type of charater")
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
