// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  let resp = '';
  if (bool1 === true && bool2 === true){
     resp = true;
  } else {
    resp = false;
  }
  return resp;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area;
}


// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let words = sentence.split(" ");
  return words;
}


// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let firstName = arrayNames[0];
  let lastName = arrayNames[arrayNames.length -1];
  let fullName = lastName + ", " + firstName;
  return fullName;
}



// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = (wins * 3) + ties;
  return score;
}


// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let contMaior = 0;
  let maior = arrayNumbers[0];
  
  for (let num in arrayNumbers){
    if(maior < arrayNumbers[num]){
      maior = arrayNumbers[num];
    }
  }
  for (let highest in arrayNumbers){
    if(maior === arrayNumbers[highest]){
      contMaior += 1;
    }
  }

  return contMaior;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let capture = "";

  if(distCat1 < distCat2){
    capture = "cat1";
  } else if(distCat1 > distCat2){
    capture = "cat2";
  } else {
    capture = "os gatos trombam e o rato foge";
  }

  return capture;
}


// Desafio 8
function fizzBuzz(arrayNums) {
  // seu código aqui
  let arrayResp = [];
  let resp = "";

  for(let num in arrayNums){
    if ((arrayNums[num] % 3 === 0) && (arrayNums[num] % 5 === 0)) {
      resp = "fizzBuzz";
    }  else if (arrayNums[num] % 3 === 0) {
        resp = "fizz";
    } else if((arrayNums[num]) % 5 === 0) {
      resp = "Buzz";
    } else {
      resp = "bug!";
    }

    arrayResp.push(resp);
  }

  return arrayResp;
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
