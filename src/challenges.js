// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let calculo = (base * heigth) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(words) {
  let removeSpace = words.split(' ');
  return removeSpace;
}

// Desafio 4
function concatName(name) {
  let first = name.shift();
  let last = name.pop();
  let junction = last + ", " + first;
  return junction;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  let finalResult = resultWins + ties;
  return finalResult;
}

// Desafio 6
// Agradecimentos a Daniel Roberto Turma 10 - Tribo B, por ter me orientado aonde eu estava errando (for dentro de for ).
function highestCount(numbers) {
  let max = 0;
  let repete = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  for (let key in numbers) {
    if (max === numbers[key]) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaA = Math.abs(cat1 - mouse);
  let distanciaB = Math.abs(cat2 - mouse);
  if (distanciaB < distanciaA) {
    return "cat2";
  } else if (distanciaA < distanciaB) {
    return "cat1";
  } else if (distanciaB === distanciaA) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = []
  for (let key in numbers) {
    if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (numbers[key] % 5 === 0) {
      resultado.push("buzz");
    } else if (numbers[key] % 3 === 0) {
      resultado.push("fizz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
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
