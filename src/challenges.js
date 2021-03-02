// Desafio 1
function compareTrue(value1,value2) {
  let result = Boolean;
  if ((value1 == true) && (value2 == true)) {
     result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base,height) {
  let area = base*height/2;
  return area; 
}

// Desafio 3 ==>>>>> Nao terminei essa ainda!!! Voltar nela!!!<<<<<<==
function splitSentence(string) {
  let arrayDeStrings = [];
  for (let i in string){
    if (string[i] == ' '){
      arrayDeStrings += ',';
    } else {
      arrayDeStrings += string[i];
    }
  } return arrayDeStrings;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = '';
  let primeiroItem = '';
  for (let i in array){
    primeiroItem = array[0];
    ultimoItem = array[i];
  }
  return ultimoItem +', ' + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = 3*wins + ties;
  return points;
}


// Desafio 6
function highestCount(arrayOfValues) {
  let biggest = arrayOfValues[0];
  let sum = 0;
  for (let i in arrayOfValues) {
    if( arrayOfValues[i] >= biggest){
      biggest = arrayOfValues[i];
    }
  }
  for (let counter in arrayOfValues){
    if (arrayOfValues[counter] == biggest){
      sum += 1;
    }
  }
  return sum;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let lesserDistance = [];
  for (let index = 0; index < 3; index += 1){
    if (Math.abs(cat1-mouse) < Math.abs(cat2-mouse)) {
      lesserDistance = "cat1";
    } else if (Math.abs(cat2-mouse) < Math.abs(cat1-mouse)){
      lesserDistance = "cat2";
    } else {
      lesserDistance = "os gatos trombam e o rato foge";
    }
  }
  return lesserDistance;
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let result = [];
  for(let key in arrayOfNumbers){
    switch(true){
      case ((arrayOfNumbers[key]%3 == 0) && (arrayOfNumbers[key]%5 != 0)):
        result.push('fizz');
        break;
      case ((arrayOfNumbers[key]%3 != 0) && (arrayOfNumbers[key]%5 == 0)):
        result.push('buzz');
        break;
      case ((arrayOfNumbers[key]%3 == 0) && (arrayOfNumbers[key]%5 == 0)):
        result.push('fizzBuzz');
        break;
      case ((arrayOfNumbers[key]%3 != 0) && (arrayOfNumbers[key]%5 != 0)):
        result.push('bug!');
        break;
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = [];
  for(let key in string){
    switch (true){
      case (string[key] == 'a'):
        result += 1;
        break;
      case (string[key] == 'e'):
        result += 2;
        break;
      case (string[key] == 'i'):
        result += 3;
        break;
      case (string[key] == 'o'):
        result += 4;
        break;
      case (string[key] == 'u'):
        rresult += 5;
        break;
      default:
        result += string[key];      
    }
  }
  return result;
}

function decode(stringWithNumbers) {
  let result = [];
  for(let key in stringWithNumbers){
    switch (true){
      case (stringWithNumbers[key] == 1):
        result += 'a';
        break;
      case (stringWithNumbers[key]  == 2):
        result += 'e';
        break;
      case (stringWithNumbers[key]  == 3):
        result += 'i';
        break;
      case (stringWithNumbers[key]  == 4):
        result += 'o';
        break;
      case (stringWithNumbers[key]  == 5):
        result += 'u';
        break;
      default:
        result += stringWithNumbers[key];      
    }
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
