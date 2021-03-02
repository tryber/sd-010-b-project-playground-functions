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
  let result = [];
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
  
  return nVezes;

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
function encode(entrada) {
  const codes = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
  }
  let saida = "";
  let signal = false;
 for(let position = 0; position < entrada.length; position++){
  for(let key in codes){
    if(key == entrada[position]){
      saida += codes[key];
      signal = true;
      break;
    }
  } 
  if(signal) {
    signal = false;
    continue;
  }
  saida += entrada[position];
 }
  
  return saida;

}

function decode(entrada) {
  // seu código aqui
  const codes = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  }
  let saida = "";
  let signal = false;
 for(let position = 0; position < entrada.length; position++){
  for(let key in codes){
    if(key == entrada[position]){
      saida += codes[key];
      signal = true;
      break;
    }
  } 
  if(signal) {
    signal = false;
    continue;
  }
  saida += entrada[position];
 }
  
  return saida;
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
