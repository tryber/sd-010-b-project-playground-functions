// Desafio 1
function compareTrue(info1, info2) {
  let message;
  if (info1 == true && info2 == true) {
    message = true;
  } else {
    message = false;
  }
  return message;
}

// Desafio 2
function calcArea(base,heigth) {
    let triangleArea = (base*heigth)/2;
    return triangleArea;
} 

// Desafio 3 - fonte de pesquisa https://www.devmedia.com.br/javascript-split-
function splitSentence(string) {
  result = string.split(" "); 
  return result;
}

// Desafio 4
function concatName(parameter) {
  let result;
  for (let index = 0; index < parameter.length; index+=1) {
    result = (parameter[parameter.length-1] + ', ' +parameter[0]);
  }
    return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result;
  let winsvalue = (wins * 3);
  let tiesvalue = (ties * 1);
  result = winsvalue + tiesvalue;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let qtd = 0;
  for (let index=0; index < numbers.length; index+=1) {
    if (higherNumber == numbers[index] ) {
    qtd = qtd + 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = Math.abs(cat1 - mouse);
  let cat2Mouse = Math.abs(cat2 - mouse);
  let message;
    if (cat1Mouse > cat2Mouse) {
        message = 'cat2';
    } else if (cat2Mouse > cat1Mouse) {
        message = 'cat1';
    } else {
        message = 'os gatos trombam e o rato foge';
    }
  return message;
}
console.log(catAndMouse(1,0,2));


// Desafio 8 // fonte de pesquisa: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
function fizzBuzz(numbers){
    let result = [];
      for (let index = 0; index < numbers.length; index +=1) {
        if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
          result.push("fizzBuzz");
        } else if (numbers[index] % 3 == 0)  {
          result.push("fizz");    
        } else if (numbers[index] % 5 == 0) {
          result.push("buzz");
        } else {
          result.push("bug!");
      }
    }
    return result;
}

// Desafio 9 // fontes de pesquisa: https://github.com/tryber/sd-010-b-project-playground-functions/pull/142 e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference

function encode(phrase) {
  let newPhrase = [];
  for (let index in phrase) {
    if (phrase[index] === 'a') {
      newPhrase += '1';
    } else if (phrase[index] === 'e') {
      newPhrase += '2';
    } else if (phrase[index] === 'i') {
      newPhrase += '3';
    } else if (phrase[index] === 'o') {
      newPhrase += '4';
    } else if (phrase[index] === 'u') {
      newPhrase += '5';
    } else {
      newPhrase += phrase[index];
    }
  }
  return newPhrase;
}
 
function decode(phrase_2) {
  let newPhrase_2 = [];
  for (let index in phrase_2) {
    if (phrase_2[index] === '1') {
      newPhrase_2 += 'a';
    } else if (phrase_2[index] === '2') {
      newPhrase_2 += 'e';
    } else if (phrase_2[index] === '3') {
      newPhrase_2 += 'i';
    } else if (phrase_2[index] === '4') {
      newPhrase_2 += 'o';
    } else if (phrase_2[index] === '5') {
      newPhrase_2 += 'u';
    } else {
      newPhrase_2 += phrase_2[index];
    }
  }
  return newPhrase_2;
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
