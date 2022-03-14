// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Prompts
  var passwordLength = prompt("What's your password length?");
  var lowercase = confirm("lowercase");
  var uppercase = confirm("uppercase");
  var numeric = confirm("numeric");
  var special = confirm("special");

  // Character strings
  const uppercaseLetters = 'ABCDEFGIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = uppercaseLetters.toLowerCase();
  const numbers = '0123456789';
  const symbols = '!@#$%^&*?+=-~';

  if (checkValidation(passwordLength, lowercase, uppercase, numeric, special)) {
    let validators = '';
    let password = '';

    // concatination of validators string
    if (lowercase) {
      validators += lowercaseLetters;
    }
    if (uppercase) {
      validators += uppercaseLetters;
    }
    if (numeric) {
      validators += numbers;
    }
    if (symbols) {
      validators += symbols;
    }

    // Random password generation
    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random()
        * validators.length + 1);

      password += validators.charAt(char)
    }

    return password;
  } else {
    return '';
  }

}

function checkValidation(passwordLength, lowercase, uppercase, numeric, special) {

  var validationFailReason = false;
  if (!(passwordLength > 8 && passwordLength < 129)) {
    validationFailReason = 'length';
  } if (!(uppercase || lowercase || numeric || special)) {
    validationFailReason = 'character'
  }

  // Password Generation
  if (validationFailReason === 'length') {
    alert('Password length must be between 8-129');
    return false;
  } else if (validationFailReason === 'character') {
    alert('You must select at least one mandatory character type');
    return false;
  } else {
    return true;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
