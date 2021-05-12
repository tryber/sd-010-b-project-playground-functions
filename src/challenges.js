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
  let junction = `${last}, ${first}`;
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
  let max = Math.max(...numbers);
  let acc = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === max) {
      acc += 1;
    }
  }
  return acc;
}
console.log(highestCount([-2, -2, -1]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaA = Math.abs(cat1 - mouse);
  let distanciaB = Math.abs(cat2 - mouse);
  if (distanciaB < distanciaA) {
    return 'cat2';
  } if (distanciaA < distanciaB) {
    return 'cat1';
  } if (distanciaB === distanciaA) {
    return 'os gatos trombam e o rato foge';
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
// agradecimentos https://pt.stackoverflow.com/questions/16963/como-substituir-uma-determinada-string-dentro-de-outra-string-em-javascript
function encode(text) {
  let linha = text;
  for (let key in text) {
    if (text[key] === "a") {
      linha = linha.replace("a", 1);
    } else if (text[key] === "e") {
      linha = linha.replace("e", 2);
    } else if (text[key] === "i") {
      linha = linha.replace("i", 3);
    } else if (text[key] === "o") {
      linha = linha.replace("o", 4);
    } else if (text[key] === "u") {
      linha = linha.replace("u", 5);
    }
  }
  return linha;
}

function decode(text) {
  let linha = text;
  for (let key in text) {
    if (text[key] === "1") {
      linha = linha.replace("1", "a");
    } else if (text[key] === "2") {
      linha = linha.replace("2", "e");
    } else if (text[key] === "3") {
      linha = linha.replace("3", "i");
    } else if (text[key] === "4") {
      linha = linha.replace("4", "o");
    } else if (text[key] === "5") {
      linha = linha.replace("5", "u");
    }
  }
  return linha;
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
