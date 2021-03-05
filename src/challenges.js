// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
// Desafio 3
function splitSentence(string) {
  
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  
  conca = array[array.length - 1];
  conca = conca + ', '  + array[0];
  return conca;   
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  if (wins > 0 || ties > 0) {
    return pontos = (wins * 3) + (ties * 1);
  } 
  return pontos;  
}
// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  let highNumberCount = 0;
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highNumber) {
      highNumber = numbers[i];
    }
  }
  for (j = 0; j < numbers.length; j += 1 ) {
    if (numbers[j] === highNumber) {
     highNumberCount = (highNumberCount+1);
     }
  }
  return highNumberCount  
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  
}



// Desafio 8
function fizzBuzz(numbers) {
     
  string = [];
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      string[i] = 'fizzBuzz';
    } else if (numbers[i] % 3 === 0) {
      string[i] = 'fizz';
    } else if (numbers[i] % 5 === 0) {
      string[i] = 'buzz';
    } else {
      string[i] = 'bug!';
    }
  }
  return string;
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9]))

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
