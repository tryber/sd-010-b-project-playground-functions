// Desafio 1
function compareTrue(firstName, midleName) {
  // seu código aqui
  if (firstName === true && midleName === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
//  console.log(calcArea(51,1));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let phrases = phrase;
  return phrases.split(' ');
}

// console.log(splitSentence("he he he kkk kkk kkk"));

// Desafio 4
function concatName(names = []) {
  // seu código aqui
  let sem;
  sem = names[names.length - 1];
  let sema = names[0];
  let seman = `${sem}, ${sema}`;
  return seman;
}

// console.log(concatName(["lucas" , "cassiano" , "ferraz", "paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let qtdPts = (wins * 3) + ties;
  return qtdPts;
}
// console.log(footballPoints(1,2));

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  let aux = numbers[0];

  for (let index in numbers) {
    if (numbers[index] > aux) {
      aux = numbers[index];
    }
  }
  for (let index in numbers) {
    if (numbers[index] === aux) {
      count += 1;
    }
  }
  return count;
}

// console.log(highestCount([9, 9, 9]));

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
// console.log(catAndMouse(6, 3, 12));
// Desafio 8
function fizzBuzz(numDiv) {
  // seu código aqui
  let resposta = [];
  for (let ind = 0; ind < numDiv.length; ind += 1) {
    if ((numDiv[ind] % 3 === 0) && (numDiv[ind] % 5 !== 0)) {
      resposta.push('fizz');
    } else if ((numDiv[ind] % 5 === 0) && (numDiv[ind] % 3 !== 0)) {
      resposta.push('buzz');
    } else if ((numDiv[ind] % 3 === 0) && (numDiv[ind] % 5 === 0)) {
      resposta.push('fizzBuzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}
console.log(fizzBuzz([9, 25]));
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
