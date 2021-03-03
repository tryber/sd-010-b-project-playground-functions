// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 === true && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calcularArea = (base * height) / 2;
  return calcularArea;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let arrayString = sentence.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let stringAux = arrayStrings;
  let stringConcat = (stringAux.pop() + ', ' + stringAux.shift());
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let somatorio = 0;
  if (wins > 0 && ties > 0) {
    somatorio = (wins * 3) + ties;
    return somatorio;
  }
  return somatorio;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat2 < distCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let resulStrings = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      resulStrings.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      resulStrings.push('fizz'); 
    } else if (arrayNumbers[i] % 5 === 0) {
      resulStrings.push('buzz');
    } else {
      resulStrings.push('bug!');
    }
  }
  return resulStrings;
}

// Desafio 9
function encode(stringEnc) {
  // seu código aqui
  let arrayencode = stringEnc.split("");
  for (let index = 0; index < arrayencode.length; index += 1) {
    if (arrayencode[index] === "a") {
      arrayencode[index] = "1";
    } if (arrayencode[index] === "e") {
      arrayencode[index] = "2";
    } if (arrayencode[index] === "i") {
      arrayencode[index] = "3";
    } if (arrayencode[index] === "o") {
      arrayencode[index] = "4";
    } if (arrayencode[index] === "u") {
      arrayencode[index] = "5";
    }
  }
  return arrayencode.join(''); 
}

function decode(stringDec) {
  // seu código aqui
  let arrayencode = stringDec.split("");
  for (let index = 0; index < arrayencode.length; index += 1) {
    if (arrayencode[index] === "1") {
      arrayencode[index] = "a";
    } if (arrayencode[index] === "2") {
      arrayencode[index] = "e";
    } if (arrayencode[index] === "3") {
      arrayencode[index] = "i";
    } if (arrayencode[index] === "4") {
      arrayencode[index] = "o";
    } if (arrayencode[index] === "5") {
      arrayencode[index] = "u";
    }
  }
  return arrayencode.join(''); 
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
