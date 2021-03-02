// Abimael Rocha - T10 Tribo B
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(sentence) {
  let name = "";
  let result = [null];
  for (let index = 0; index < sentence.length; index++){
    if(sentence[index] === " "){
      
      result.push(name);
      name = "";
      continue;
    }
    name += sentence[index];
  }
  result.push(name);
  return result;
}

// Desafio 4
function concatName(names) {
  let result = "";
  result += names[names.length - 1] + ", ";
  result += names[0];

  return result;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;

  return points;
}
// Desafio 6
function highestCount(array) {
  let max = array[0];
  let nVezes = 0;
  //Verificar qual maior número
  for(let key in array){
    if(array[key+1] >= max){
      max = array[key+1];
    }
  }

  for(let key in array)
    if(array[key] === max) nVezes++;

}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1";
  }
  else if((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))){
    return "cat2";
  }
  else return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(entrada) {
  let saida = [];

  for(let key = 0; key < entrada.length; key++){
    if(entrada[key] % 3 == 0 && entrada[key] % 5 == 0 && entrada[key]%2 != 0){
      saida.push("fizzBuzz")
    }
    else if(entrada[key] % 3 == 0 && entrada[key]%2 != 0) 
    {
      saida.push("fizz");
    }
    else if(entrada[key] % 5 == 0 && entrada[key]%2 != 0) {
      saida.push("Buzz");
    }
    else {
      saida.push("bug!");
    }  
  }
  return saida;
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
