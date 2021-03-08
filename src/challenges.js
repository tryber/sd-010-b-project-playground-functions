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
  let lastFirst = '';
  lastFirst = array[array.length - 1] + ', ' + array[0];
  return lastFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  if (wins > 0 || ties > 0) {
    pontos = (wins * 3) + (ties * 1);
  }
  return pontos;
}
// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  let highNumberCount = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highNumber) {
      highNumber = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === highNumber) {
      highNumberCount = highNumberCount + 1;
    }
  }
  return highNumberCount;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // usei o math.abs pra pegar os valores absolutos das diferenças, referência > https://javascript.plainenglish.io/javascript-algorithm-cats-and-a-mouse-fd60fb1811ba
  let result = '';
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse)) === true) {
    result = 'cat1';
    return result;
  } else if ((Math.abs(cat2 - mouse)) < (Math.abs(cat1 - mouse)) === true) {
    result = 'cat2';
    return result;
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    result = 'os gatos trombam e o rato foge';
    return result;
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  let frase = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      frase[i] = 'fizzBuzz';
    } else if (numbers[i] % 3 === 0) {
      frase[i] = 'fizz';
    } else if (numbers[i] % 5 === 0) {
      frase[i] = 'buzz';
    } else {
      frase[i] = 'bug!';
    }
  }
  return frase;
}

// Desafio 9
function encode(text) {
  // usei o replace() nativa para fazer as respectivas mudanças nas strings, referência do replace() > https://www.w3schools.com/jsref/jsref_replace.asp

  text = text.replace(/a/g, '1');
  text = text.replace(/e/g, '2');
  text = text.replace(/i/g, '3');
  text = text.replace(/o/g, '4');
  text = text.replace(/u/g, '5');
  return text;
}

function decode(text) {
  // usei o replace() para fazer as respectivas mudanças nas strings, referência do replace() > https://www.w3schools.com/jsref/jsref_replace.asp

  text = text.replace(/1/g, 'a');
  text = text.replace(/2/g, 'e');
  text = text.replace(/3/g, 'i');
  text = text.replace(/4/g, 'o');
  text = text.replace(/5/g, 'u');
  return text;
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
