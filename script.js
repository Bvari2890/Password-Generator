var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+"];

function getPasswordOptions() {
  var length = parseInt(
    prompt('Select a password between 8 & 128 characters'),
    10
  );
  if (Number.isNaN(length)) {
    alert('Please type a number between 8 & 128');
    return null;
  }
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
  var haveSpecial = confirm(
    'Click OK to confirm including special characters.'
  );
  var haveNumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );
  var haveLower = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  var haveUpper = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (
    haveSpecial === false &&
    haveNumbers === false &&
    haveLower === false &&
    haveUpper === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOptions = {
    length,
    haveSpecial,
    haveNumbers,
    haveLower,
    haveUpper,
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.haveSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }

  if (options.haveNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.haveLower) {
    possibleCharacters = possibleCharacters.concat(lower);
    guaranteedCharacters.push(getRandom(lower));
  }

  if (options.haveUpper) {
    possibleCharacters = possibleCharacters.concat(upper);
    guaranteedCharacters.push(getRandom(upper));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
