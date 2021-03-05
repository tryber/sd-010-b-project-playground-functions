// Desafio 1

let bool1 = false;
let bool2 = true;

function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2

let base = 10;
let height = 50;

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

let phrase = "gabriel menezes dias dos santos";

function splitSentence(phrase) {
  let splittedPhrase = phrase.split(" ");
  return splittedPhrase;
}

// Para resolver o exercício 3 eu consultei um artigo do DevMedia sobre split. src = https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.

// Desafio 4

let words = ["gabriel", "menezes", "dias", "santos"];

function concatName(words) {
  let firstWord = words[0];
  let lastWord = words[words.length - 1];
  return lastWord + ", " + firstWord;
}

// Desafio 5

let wins;
let ties;

function footballPoints(wins, ties) {
  if(wins == 0 && ties == 0) {
    return 0;
  }else {
    return (ties + (wins * 3));
  }
}

// Desafio 6

let numbers = [];

function highestCount(numbers) {
  let result = 0;
  let highest = 0;
  for(let index in numbers) {
    if(highest < numbers[index]) {
      highest = numbers[index];
    }
  }
  for(let index2 = 0; index2 < numbers.length; index2 +=1) {
    if(numbers[index2] === highest) {
      result = result += 1;
    }
  }
  return result;
}

// Consegui entender esse desafio com a ajuda do meu colega de turma Teófilo Brandão, dando uma olhada no código dele com a devida autorização do mesmo.

// Desafio 7

let cat1 = 0;
let cat2 = 2;
let mouse = 1;

function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  }else if(Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  }else{
    return "cat1";
  }
}

// Consegui resolver esse desafio de um jeito bem mais simples do que eu havia pensado inicialmente graças à imensa dica de como usar o Math.abs() que meu colega Emerson Saturnino apresentou em uma thread do Slack.

// Desafio 8

let arrayNumbers = [];

function fizzBuzz(arrayNumbers) {
  let finalArray = [];
  for(let index in arrayNumbers) {
    if(arrayNumbers[index] % 3 == 0 && arrayNumbers[index] % 5 == 0) {
      finalArray.push("fizzBuzz");
    }else if(arrayNumbers[index] % 5 == 0) {
      finalArray.push("buzz");
    }else if(arrayNumbers[index] % 3 == 0) {
      finalArray.push("fizz");
    }else {
      finalArray.push("bug!");
    }
  }
  return finalArray;
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
