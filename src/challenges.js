// Desafio 1
function compareTrue(b1, b2) {
  if (b1 && b2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return (`${string[string.length - 1]}, ${string[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(count) {
  let maior = count[0];
  let contador = 0;
  for (let index = 0; index < count.length; index += 1) {
    if (maior < count[index]) {
      maior = count[index];
      contador = 1;
    } else if (maior === count[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  } if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(divisivel) {
  let apenas3 = true;
  let apenas5 = true;
  let fizzBuster = []
  for (let porta = 0; porta < divisivel.length; porta += 1) {
    for (let divisores = 2; divisores < divisivel[porta]; divisores += 1) {
      if (divisores !== 3) {
        if (divisivel[porta] % 3 === 0 && divisivel[porta] % divisores === 0 ) {
          apenas3 = false;
        }
      }
      if (divisores !== 5) {
        if (divisivel[porta] % 5 === 0 && divisivel[porta] % divisores === 0 ) {
          apenas5 = false;
        }
      }
    }
    if (divisivel[porta] % 3 === 0 && divisivel[porta] % 5 === 0) {
      fizzBuster.push('fizzBuzz');
    } if (divisivel[porta] % 3 !== 0 && divisivel[porta] % 5 !== 0) {
        fizzBuster.push('bug');
        apenas3 = false;
        apenas5 = false;
      }
    if (apenas5 === true) {
      fizzBuster.push('buzz')
    } if (apenas3 === true) {
        fizzBuster.push('fizz')
      }    
    apenas3 = true;
    apenas5 = true;
  }
  return fizzBuster;
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
