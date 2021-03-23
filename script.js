// Assignment Code
const generateBtn = document.querySelector("#generate");

// set arrays of possible values
let charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let charSpec = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', '}', '~'];

// Write password to the #password input
function writePassword() {
  // const password = generatePassword();
  const passwordText = document.querySelector("#password");

  let passChar = [];

  let passwordLength = prompt('Password Length?')

  for(; passwordLength < 8 || passwordLength > 128;) {
    passwordLength = prompt('Password Length?')
  }


  
  // Loop until full validated -
    // Validate that password length is between 8 and 128
    // let passworLength = 
      // for(i=0, i>=8 && i<=128) {
        // prompt('Password Length?')
      // }
      // prompt password length min = 8 max = 128
        // if invalid value, alert/prompt for valid value
        // if valid, assign validated input to variable passLength

  // let passwordLength = prompt ('Password Length?')

  // Loop until fully validated - 
    // Validate that some type of character has been selected, if not, re-run questions
    // for (i=0, i<1)
      // prompt lowercase (Y or N)'
      if (prompt ('Use Lower Case letters (Y/N)?') === 'Y') {
        passChar = passChar.concat(charLower);
      } 
        // if invalid value, alert/prompt for valid value
        // if y, push upper case array to passChar
        // if y, add 1 to i
      // prompt uppercase (Y or N)
      if (prompt ('Use Upper Case letters (Y/N)?') === 'Y') {
        passChar = passChar.concat(charUpper);
      }
        // if invalid value, alert/prompt for valid value
        // if y, push uppercase array to passChar
        // if y, add 1 to i
      // prompt numbers (Y or N)
      if (prompt ('Use Numbers (Y/N)?') === 'Y') {
        passChar = passChar.concat(charNum);
      }
        // if invalid value, alert/prompt for valid value
        // if y, push numbers array to passChar
        // if y, add 1 to i
      // prompt special characters (Y or N)
      // prompt ('Use Special Characters (Y/N)?')
      if (prompt ('Use Special Characters (Y/N)?') === 'Y') {
        passChar = passChar.concat(charSpec);
      }

      console.log(passChar)

        // if invalid value, alert/prompt for valid value
        // if y, push special characters array to passChar
        // if y, add 1 to i


  // pass passChar & passLength to function generatePassword and generate a password
    // for the given length and available characters
      // declare variable text: let text = "";
      // for (i=0, i<passLength.length, i++) {
        // text += passChar[Math.floor(
          // Math.random() * passChar.length
          // )
        // }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);