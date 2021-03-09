// Desafio 1
let compareTrue = (x, y) => {
  return x && y;
}

// Desafio 2
let calcArea = (base, heigth) => {
  return (base * heigth) / 2;
}

// Desafio 3
let splitSentence = (phrase) => {
  return phrase.split(' ');
}

// Desafio 4
  let concatName = (names) => {
    return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
let footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
}
// Desafio 6
//https://stackoverflow.com/questions/46640420/how-to-find-number-of-occurrence-of-highest-element-in-an-javascript-array/46640571
let highestCount = (arrNum) => {
  return arrNum.reduce(function(r,a){
    if (!r || a > r.value) {
      return { value: a, count: 1};
    }
    if (r.value === a) {
      r.count++;
    }
    return r;
  }, undefined).count;
}

// Desafio 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
let catAndMouse = (mouse, cat1, cat2) => {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position < cat2Position) {
    return 'cat1';
  } else if (cat1Position > cat2Position) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
  
// Desafio 8
let fizzBuzz = (arrN) => {
  let resultFb = [];
    for (let i = 0; i < arrN.length; i++) {
      resultFb.push(
        arrN[i] % 3 === 0 && arrN[i] % 5 === 0 ? "fizzBuzz" : 
        arrN[i] % 3 === 0 ? "fizz" : 
        arrN[i] % 5 === 0 ? "buzz" : "bug!"
      );      
    }
    return resultFb;
}
  
// Desafio 9
function encode(arrStr) {
  let result = arrStr;
  for (i = 0; i <arrStr.length; i++) {
    result = result.replace("a", 1).replace("e", 2).replace("i", 3).replace("o", 4).replace("u", 5);
  }
  return result;
}
function decode(arrNum) {
  let result = arrNum;
  for (i = 0; i <arrNum.length; i++) {
    result = result.replace(1 , "a").replace(2, "e").replace(3, "i").replace(4, "o").replace(5, "u");
  }
  return result;
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
