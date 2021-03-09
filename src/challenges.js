// Desafio 1
function compareTrue(n1, n2) {
  let compare = false;
  if (n1 > 0 && n2 > 0) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(contacts) {
  return contacts[contacts.length -1] + ', ' + contacts[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (ties + (wins * 3));
}

// Desafio 6
// Creditos do Spread - https://www.luiztools.com.br/post/4-segredos-do-operador-spread-em-javascript/
function highestCount(number) {
  let highN = Math.max(...number)
  let x = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (highN == number[index]) {
      x = x + 1;
    }    
  }
  return x;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse) - Math.abs(cat1) < Math.abs(mouse) - Math.abs(cat2)) {
    return "cat1";
  } else if (Math.abs(mouse) - Math.abs(cat1) > Math.abs(mouse) - Math.abs(cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let zumbido = [];
  for (let index = 0; index < array.length; index += 1) {  
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      zumbido.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      zumbido.push('fizz');
    } else if (array[index] % 5 === 0) {
      zumbido.push('buzz');
    } else if ((array[index] % 3 != 0 || array[index] % 5 != 0)) {
      zumbido.push('bug!');
    }
  }
  return zumbido;
}

// Desafio 9
let codes = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
}

function encode(frase) {
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


function decode(frase) {
  let novaFrase = [];
  for (let index = 0; index < frase.length; index++) {
    novaFrase.push(frase[index]);    
  }
  for (let key in codes) {
    // frase.split(novaPalavra[novaPalavra]).join(codes[key])
    for (let index = 0; index < novaFrase.length; index += 1) {
			if (codes[key] == novaFrase[index]) {
        novaFrase[index] = key;
      }
    }
  }
  return novaFrase.join('');
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