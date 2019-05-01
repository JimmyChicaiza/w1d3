var inputStr = "lighthouse in the house";

function countLetters(inputStr) {
  var noSpaces = inputStr.split(" ").join("").split("");
  var objInput = {};

  noSpaces.forEach(function(letter, i) {
    var keyExist = objInput.hasOwnProperty(letter);
    if (!keyExist) {
      objInput[letter] = [i];
    } else {
      objInput[letter].push(i);
    }
  });
  return objInput;
}

console.log(countLetters(inputStr));
