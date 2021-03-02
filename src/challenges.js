// Desafio 1
function compareTrue(value1, value2) {
  // meu código aqui
  let retorno
  if ((value1 === true && value2 === true)) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  // meu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(toSplit) {
  // meu código aqui
  return toSplit.split(' ');
}

// Desafio 4
function concatName(reordArray) {
  // meu código aqui
  return `${reordArray[reordArray.length - 1]}, ${reordArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // meu código aqui
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(listNum) {
  // meu código aqui
  let higNum = 0;
  let countHig = 0;
  for (let i = 0; i < listNum.length; i++) {
    if(listNum[i] > higNum){
      higNum = listNum[i];
    }    
  }
  for (let i = 0; i < listNum.length; i++) {
    if(higNum == listNum[i]){
      countHig++;
    }    
  }
  return countHig;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // meu código aqui
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if(distCat1 < 0){
    distCat1 *= -1;
  }
  if(distCat2 < 0){
    distCat2 *=-1;
  }

  if( distCat1 < distCat2){
    return 'cat1'
  }else if(distCat1 > distCat2){
    return 'cat2'
  }else{
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrayFzzBzz) {
  // meu código aqui
  for (let i = 0; i < arrayFzzBzz.length; i++) {
    if( (arrayFzzBzz[i]%3==0) && (arrayFzzBzz[i]%5==0) ){
      arrayFzzBzz[i] = "fizzBuzz";
    }else if( arrayFzzBzz[i]%3 == 0 ){
      arrayFzzBzz[i] = "fizz"
    }else if( arrayFzzBzz[i]%5==0 ){
      arrayFzzBzz[i] = "buzz"
    }else{
      arrayFzzBzz[i] = "bug!";
    }    
  }
  return arrayFzzBzz;
}

// Desafio 9
function encode(toEncode) {
  // meu código aqui
  let arrayToEnc = toEncode.split('');
  for (let i = 0; i < arrayToEnc.length; i++) {
    switch (arrayToEnc[i]) {
      case 'a':
        arrayToEnc[i] = 1;
        break;
      case 'e':
        arrayToEnc[i] = 2;
        break;
      case 'i':
        arrayToEnc[i] = 3;
        break;
      case 'o':
        arrayToEnc[i] = 4;
        break;
      case 'u':
        arrayToEnc[i] = 5;
        break;   
    }   
  }
  return arrayToEnc.join('');
}

function decode(toDecode) {
  // meu código aqui
  let arrayToDecode = toDecode.split('');
  for (let i = 0; i < arrayToDecode.length; i++) {
    switch (arrayToDecode[i]) {
      case '1':
        arrayToDecode[i] = 'a';
        break;
      case '2':
        arrayToDecode[i] = 'e';
        break;
      case '3':
        arrayToDecode[i] = 'i';
        break;
      case '4':
        arrayToDecode[i] = 'o';
        break;
      case '5':
        arrayToDecode[i] = 'u';
        break;   
    }   
  }
  return arrayToDecode.join('');
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
