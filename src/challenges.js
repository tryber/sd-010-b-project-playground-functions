// Desafio 1
let pizzaIsGood = true;
let hamburguerIsGood = true;
let chocolatePizzaIsGood = false;
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 == true) {
    return true;
  }
  else {
    return false;
  }
}console.log(compareTrue(pizzaIsGood, chocolatePizzaIsGood))
console.log('----------------------------------------------')

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area
}
console.log(calcArea(10, 50))
console.log('----------------------------------------')

// Desafio 3
function splitSentence(parameter) {
  let array = parameter.split(' ')
  return array
}
console.log(splitSentence("vamo que vamo"))
console.log('-------------------------------------------')

// Desafio 4
function concatName(parameter) {
  
  let concaString = parameter[parameter.length-1] + ', ' + parameter[0]
  return concaString
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
console.log('--------------------------------------------')

// Desafio 5
function footballPoints(wins, ties) {
  let winPointValue = 3
  let tiePointValue = 1
  let victoryPoints = winPointValue * wins
  let tiePoints = tiePointValue * ties
  let totalPoints = victoryPoints + tiePoints
  
  return totalPoints
}
console.log(footballPoints(1, 2))
console.log('----------------------------------')

// Desafio 6
function highestCount(array) {
  let highestNumber = 0
  let numberCount = 0
  for (let index = 0; index < array.length; index += 1) {
    if ( array[index] > highestNumber) {
      highestNumber = array[index];
    
      numberCount = 1;	
    }
  else if (array[index] == highestNumber){
  numberCount += 1;
      }
    
    
  }
  return numberCount
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionMouse = mouse;
  let positionCat1 = cat1;
  let positionCat2 = cat2;

  if ( positionMouse > positionCat1 && positionCat1 > positionCat2) {
    console.log('cat1')
  }
  else if (positionMouse > positionCat2 && positionCat2 > positionCat1) {
    console.log('cat2')
  }
  else if (positionCat1 == positionCat2) {
    console.log("os gatos trombam e o rato foge")
  }
  else if (positionMouse < positionCat1 && positionCat1 < positionCat2) {
    console.log("cat1")
  }
  else if (positionMouse < positionCat2 && positionCat2 < positionCat1) {
    console.log('cat2')
  }
}
console.log(catAndMouse(10, 7, 6))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  let novaFrase = [];
  for (let index = 0; index < frase.length; index++) {
    novaFrase.push(frase[index]);
  }
  for (let key in codes) {
    // frase.split(novaPalavra[novaPalavra]).join(codes[key])
    for (let index = 0; index < novaFrase.length; index += 1) {
      if (key == novaFrase[index]) {
        novaFrase[index] = codes[key];
      }
    }
  }
  return novaFrase.join('');
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
