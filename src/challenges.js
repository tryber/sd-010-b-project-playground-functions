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
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;
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

// Desafio 8
function fizzBuzz(){
  // seu código aqui
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
