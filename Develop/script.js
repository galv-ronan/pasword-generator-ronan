// This Password Generator provides a password based on the criteria that the user specifies.

// Add event listener to generate button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Variable Criteria Declarations
var confirmLength = ""
var confirmSymbols;
var confirmUpper;
var confirmLower;
var confirmNumeric;

var passwordCharacters = []

// Arrays
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Prompt to confirm the length of the password
var generatePassword = function() {
  var confirmLength = (prompt("Choose the length of your password. Pick a number from 8-128."))

    while (confirmLength <= 7 || confirmLength >= 129 || (isNaN(confirmLength))) {
      alert("The password length must be between 8-128 characters. Or you've inserted an invalid character. Please pick a valid number.");
      var confirmLength = (prompt("Choose the length of your password. Pick a number from 8-128."));
    }


    // Alert the user how many characters the password will have
    alert("Your password will have " + confirmLength + " characters.");

    // Determine the criteria of the password
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmSymbols = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
      // Loop if answer is outside of parameters
      while(confirmUpper === false && confirmLower === false && confirmSymbols === false && confirmNumeric === false) {
        alert("You must choose at least one parameter");
        var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
        var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmSymbols = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
      }

      // Determining the password

      var passwordCharacters = []

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upperLetters)
    }

    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowerLetters)
    }

    if (confirmSymbols) {
      passwordCharacters = passwordCharacters.concat(symbols)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }

      // console.log (passwordCharacters)

      // Loop for random characters for randomPassword
      var randomPassword = ""

      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }

      return randomPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
