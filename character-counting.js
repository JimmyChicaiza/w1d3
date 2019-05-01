var inputStr = "lighthouse in the house";

function countLetters(inputStr) {
  var noSpaces = inputStr.split(" ").join("").split("");
  var objInput = {};

  noSpaces.forEach(function(count) {
    var keyExist = objInput.hasOwnProperty(count);
    if (keyExist) {
      objInput[count] += 1;
    } else {
      objInput[count] = 1;
    }
  });
  return objInput;
}

console.log(countLetters(inputStr));