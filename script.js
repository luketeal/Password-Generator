// Assignment Code
let generateBtn = document.querySelector("#generate");

// set arrays of possible values

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // prompt password length min = 8 max = 128
    // if invalid value, alert/prompt for valid value
    // if y, assign validated input to variable passLength
  // prompt lowercase (Y or N)
    // if invalid value, alert/prompt for valid value
    // if y, push upper case array to passChar
  // prompt uppercase (Y or N)
    // if invalid value, alert/prompt for valid value
    // if y, push uppercase array to passChar
  // prompt numbers (Y or N)
    // if invalid value, alert/prompt for valid value
    // if y, push numbers array to passChar
  // prompt special characters (Y or N)
    // if invalid value, alert/prompt for valid value
    // if y, push special characters array to passChar

  // Validate that some type of character has been selected, if not, re-run questions

  // pass passChar & passLength to function generatePassword and generate a password
    // for the given length and available characters
      // for (i=0, i<passLength.length, i++) {
        // text += passChar[math.Floor]
      }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);