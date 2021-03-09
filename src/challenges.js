// Desafio 1
let pizzaIsGood = true;
let chocolatePizzaIsGood = false;
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 === true) {
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
  else if (array[index] === highestNumber){
  numberCount += 1;
      }
    
    
  }
  return numberCount
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log('-------------------------------')
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse;
  cat1;
  cat2;
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let lesserDistance;
  if ( distanceCat1 < distanceCat2) {
    lesserDistance = 'cat1'
  }
  else if (distanceCat2 < distanceCat1) {
    lesserDistance = 'cat2'
  }
  else if (distanceCat1 === distanceCat2) {
    lesserDistance = "os gatos trombam e o rato foge"
  }
  
  return lesserDistance;
}
console.log(catAndMouse(0, 2, 3));
console.log('-----------------------------------');

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push( 'fizzBuzz')
    }
    else if (array[index] % 5 === 0) {
      result.push('buzz')
    }
    else if (array[index] % 3 === 0) {
      result.push('fizz')
    }
    else {
      result.push('bug!')
    }
    
  }
  return result
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log('------------------------------------')
// Desafio 9
function encode() {
  let a = 1
  let e = 2
  let i = 3
  let o = 4
  let u = 5
  
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
