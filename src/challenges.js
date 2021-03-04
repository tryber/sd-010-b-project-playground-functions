// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === false && b === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let phraseArray = [];
  let currentWord = "";
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] != " ") {
      currentWord = currentWord + phrase[index];
    } else {
      phraseArray.push(currentWord);
      currentWord = "";
    }
  }
  phraseArray.push(currentWord);
  return phraseArray;
}

// Desafio 4
function concatName(namesArray) {
  let arrayConcat = [];
  let lastName = namesArray.length - 1;
  let names = "";
  for (index = lastName; index >= 0; index -= 1) {
    if (index === lastName) {
      arrayConcat.push(namesArray[index]);
    } else if (index === 0) {
      arrayConcat.push(namesArray[index]);
    }
  }
  names = arrayConcat[0] + ", " + arrayConcat[1];
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valuesArray) {
  let biggestNumber = valuesArray[0];
  let subCounter = 0;
  let currentCounter = 0;
  for (index = 0; index < valuesArray.length; index += 1) {
    for (counterIndex = 0; counterIndex < valuesArray.length; counterIndex += 1) {
      if (valuesArray[counterIndex] === valuesArray[index]) {
        currentCounter += 1;
      }
    }
    if (valuesArray[index] >= biggestNumber) {
      biggestNumber = valuesArray[index];
      subCounter = currentCounter;
      currentCounter = 0;
    } else {
      currentCounter = 0;
    }
  }
  return subCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = cat1 - mouse;
  let cat2distance = cat2 - mouse;
  cat1distance = Math.abs(cat1distance);
  cat2distance = Math.abs(cat2distance);
  if (cat1distance < cat2distance) {
    return "cat1";
  } else if (cat1distance > cat2distance) {
    return "cat2";
  } else if (cat1distance = cat2distance) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push("fizzBuzz");
    } else if (numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push("buzz");
    } else if (numbersArray[index] % 3 === 0) {
      fizzBuzzArray.push("fizz");
    } else {
      fizzBuzzArray.push("bug!");
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(phrase) {
  let encodedString = "";
  for (index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === "a") {
      encodedString = encodedString + "1";
    } else if (phrase[index] === "e") {
      encodedString = encodedString + "2";
    } else if (phrase[index] === "i") {
      encodedString = encodedString + "3";
    } else if (phrase[index] === "o") {
      encodedString = encodedString + "4";
    } else if (phrase[index] === "u") {
      encodedString = encodedString + "5";
    } else {
      encodedString = encodedString + phrase[index];
    }
  }
  return encodedString;
}

function decode(phrase) {
  let decodedString = "";
  for (index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === "1") {
      decodedString = decodedString + "a";
    } else if (phrase[index] === "2") {
      decodedString = decodedString + "e";
    } else if (phrase[index] === "3") {
      decodedString = decodedString + "i";
    } else if (phrase[index] === "4") {
      decodedString = decodedString + "o";
    } else if (phrase[index] === "5") {
      decodedString = decodedString + "u";
    } else {
      decodedString = decodedString + phrase[index];
    }
  }
  return decodedString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
