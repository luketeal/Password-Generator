// Assignment Code
const generateBtn = document.querySelector("#generate");

// set arrays of possible values
const charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const charSpec = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', '}', '~'];


// Write password to the #password input
function writePassword() {
  
  let passChar = [];

  // Loops for password length until full validated -
  let passLength
  while (passLength == null || passLength < 8 || passLength > 128 || !Number.isInteger(passLength)) {
    const questionLength = passLength == null ? 'Password length?' : 'Invalid password length, please enter a value between 8 and 128'
    passLength = parseFloat(prompt(questionLength, '8'))
  }
  


  // Loops until at least one character type is input
  for (let i=0; i<1;) {
    
    // Loops until lowercase option is valid input - 
    let passLower
    while (passLower == null || (passLower !== 'Y' && passLower !== 'N')) {
      const questionLower = passLower == null ? 'Use Lower Case letters (Y/N)?' : 'Invalid response, please enter "Y" for yes and "N" for No. \nUse Lower Case letters?'
      passLower = prompt(questionLower, 'Y').toUpperCase()
      
      // if Y is chosen, increase i by 1 so the for loop knows that 
      // at least one character type is chosen and 
      // add lowercase characters to array of character options.
      if (passLower ==='Y') {
        i++;
        passChar = passChar.concat(charLower);
      }
    }
    
    // Loops until uppercase option is valid input - 
    let passUpper
    while (passUpper == null || (passUpper !== 'Y' && passUpper !== 'N')) {
      const questionUpper = passUpper == null ? 'Use Upper Case letters (Y/N)?' : 'Invalid response, please enter "Y" for yes and "N" for No. \nUse Upper Case letters?'
      passUpper = prompt(questionUpper, 'Y').toUpperCase()
      
      // if Y is chosen, increase i by 1 so the for loop knows that 
      // at least one character type is chosen and 
      // add uppercase characters to array of character options.
      if (passUpper ==='Y') {
        i++;
        passChar = passChar.concat(charUpper);
      }

    }

    // Loops until numbers option is valid input - 
    let passNumber
    while (passNumber == null || (passNumber !== 'Y' && passNumber !== 'N')) {
      const questionNumber = passNumber == null ? 'Use Numbers (Y/N)?' : 'Invalid response, please enter "Y" for yes and "N" for No. \nUse Numbers?'
      passNumber = prompt(questionNumber, 'Y').toUpperCase()
      
      // if Y is chosen, increase i by 1 so the for loop knows that 
      // at least one character type is chosen and 
      // add numbers to array of character options.
      if (passNumber ==='Y') {
        i++;
        passChar = passChar.concat(charNum);
      }

    }

      // Loops until special characters option is valid input - 
      let passSpecial
      while (passSpecial == null || (passSpecial !== 'Y' && passSpecial !== 'N')) {
        const questionSpecial = passSpecial == null ? 'Use Special Characters (Y/N)?' : 'Invalid response, please enter "Y" for yes and "N" for No. \nUse Special Characters?'
        passSpecial = prompt(questionSpecial, 'Y').toUpperCase()
        
        // if Y is chosen, increase i by 1 so the for loop knows that 
        // at least one character type is chosen and 
        // add special characters to array of character options.
        if (passSpecial ==='Y') {
          i++;
          passChar = passChar.concat(charSpec);
        }
      }

      // alert user they did not select any options and loops back to beginning of character type questions
      if (i<1) {
        alert('You did not select any characer type.\nPlease select at least one character type.')
      }
    }

  // for the given length and available characters, loop through each password position and 
  // randomly choose a character from the character types chosen
  function generatePassword() {

    let text = "";
    
    for (i=0; i<passLength; i++) {
      text += passChar[Math.floor(
        Math.random() * passChar.length
        )
      ]
    }

    return text;    
  }

  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);