// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(stringName) {
 let nameConcat = stringName[stringName.length - 1] +', ' + stringName[0];
 return nameConcat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + (ties * 1));
  return pontos;
}

// Desafio 6
function higherValue(highers) {
  let higher = 0;
  for (let n in highers) {
    if( highers[n] > higher) {
      higher = highers[n];
    }
  }
  return higher;
}

function highestCount(values) {
  let acres = 0;
  let higher = higherValue(values);
  for (let j in values) {
    if (values[j] === higher) {
       acres +1 ;
    }
  }
  return acres;
}

// Desafio 7
// utilizei math.abs a partir de pesquisas na internet e orientação de alguma thread no slack
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (catnumber1 < catnumber2) {
    return 'cat1';
  } if (catnumber2 < catnumber1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let n in numbers){
    if (numbers[n] % 3 === 0 && numbers[n] % 5 === 0) {
     result.push ('fizzBuz!');
    } else if (numbers[n] % 3 === 0) {
      result.push ('fizz');
    } else if ( numbers[n] % 5 === 0) {
      result.push ('buzz');
  }else
  result.push ('bug!');
}
return result;
}
  console.log(fizzBuzz([2,15,7,9,45]));

// Desafio 9
function encode(string1) {
  let vogais = ['a', 'e', 'i', 'o', 'u']
  let numeros = [1, 2, 3, 4, 5]
  for (let l in string1){
    for(let v in vogais){
      for (let n in numeros){
       (vogais[v] == numeros[n])
    
    if( string1[l] === vogais[v]){
      return string1[n]
    }
  }
}
}
}
console.log(encode(['hi, there']));
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
}
