// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+"];

// Write password to the #password input
function writePassword() {
  var pwopt = makePassword()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function makePassword() {
  var length = parseInt(prompt("Choose the number of characters between 8 and 128"));
  
  if (Number.isNaN(length)) {
    alert("This is invalid");
    return null;
  } 
  if (length < 8) {
    alert("Not enough characters");
  }
  if (length > 128) {
    alert("Too many characters");
  }
  var haveLowercase = confirm("Would you like to add lowercase characters?");
  var haveUppercase = confirm("Would you like to add uppercase characters?");
  var haveNumbers = confirm("Would you like to add numeric characters?");
  var haveSpecial = confirm("Would you like to add special characters?");

  if (haveLowercase === false  && haveUppercase === false && haveNumbers === false && haveSpecial === false) {
    alert("This is invalid");
    return null;
  }

  var pwoptions = {
    length: length, 
    haveLowercase: haveLowercase,
    haveUppercase: haveUppercase,
    haveNumbers: haveNumbers,
    haveSpecial: haveSpecial
  } 
return pwoptions;
}

function generatePassword(){
  var pwopt = makePassword()
  var storeResult = []
  var storePossible = []
  var storeChosen = []

  console.log(pwopt.haveLowercase)
 if (pwopt.pwoptitons.haveLowercase){
   storePossible = storePossible.concat(lower);
   storeChosen.push(pwopt)
 }

}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
