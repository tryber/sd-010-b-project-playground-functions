// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return (true);
  }
  if (boolean1 === false && boolean2 === false) {
    return (false);
  }
  if ((boolean1 === false && boolean2 === true) || (boolean1 === true && boolean2 === false)) {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let spaceFound = 0;
  let wordFound = '';
  let latestSpaceFound = 0;
  let phraseSplited = [];

  for (let counterLettersStr = 0; counterLettersStr < string.length; counterLettersStr += 1) {
    if (string[counterLettersStr] === ' ') {
      spaceFound = counterLettersStr;
      for (let wordCleanUp = latestSpaceFound; wordCleanUp < spaceFound; wordCleanUp += 1) {
        wordFound += string[wordCleanUp];
      }
      phraseSplited.push(wordFound);
      wordFound = '';
      latestSpaceFound = counterLettersStr + 1;
    } else if (counterLettersStr === string.length - 1) {
      spaceFound = counterLettersStr;
      for (let wordCleanUp = latestSpaceFound; wordCleanUp < spaceFound; wordCleanUp += 1) {
        wordFound += string[wordCleanUp];
      }
      wordFound += string[string.length - 1];
      phraseSplited.push(wordFound);
      wordFound = '';
      latestSpaceFound = counterLettersStr + 1;
    }
  }
  return (phraseSplited);
}

// Desafio 4
function concatName(arrayOfStrings) {
  // seu código aqui
  //variavel que vai receber o resultado final
let phraseOfElements = '';

phraseOfElements = (arrayOfStrings[(arrayOfStrings.length-1)]) + ', ' + (arrayOfStrings[(arrayOfStrings.length) - (arrayOfStrings.length)]);

return phraseOfElements;
}

// Desafio 5
function footballPoints(wins, ties) {
let pointsWins = (wins * 3);
let pointsTies = (ties * 1)
let pointsTotal = (pointsTies + pointsWins)

return pointsTotal;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  //variavel que vai armazenar qual maior numero.
  let highestNumber = 0;
  //vai armazenar o tamanho do array porque estava dando algum erro usando o length
  let arraySize = arrayNumbers.length - 1
  //variavel que vai contar quantas vezes o numero se repete
  let repeatedNumbers = 0;
  //vai contar em cada numero do array apresentado.
  for (let counterNumbers = 0; counterNumbers < arraySize; counterNumbers += 1) {
    
    if (highestNumber < arrayNumbers[counterNumbers]) {

      highestNumber = arrayNumbers[counterNumbers];
    }
  }
  //vai contar cada numero do array novamente
  for (let arrayCounter = 0; arrayCounter < arrayNumbers.length; arrayCounter += 1) {

    //compara o maior numero com os numeros do array
    if (highestNumber === arrayNumbers[arrayCounter]){
      repeatedNumbers += 1;
    }
  }
  return (repeatedNumbers);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  //variaveis que receberao as posições dos gatos e do rato
  let positionCat1 = cat1;
  let positionCat2 = cat2;
  let positionMouse = mouse;

  if ((mouse - positionCat1) > (mouse - positionCat2)) {
    return ('cat2');
  } else if ((mouse - positionCat1) < (mouse - positionCat2)) {
    return ('cat1');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
