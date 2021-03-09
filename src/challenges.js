// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2){
    return true;
  } else {
    return false;
  }
}

//console.log(compareTrue(true, true));
//console.log(compareTrue(false, true));
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  return (( base * altura ) / 2);
}

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

//console.log(splitSentence("go Trybe"));
//console.log(splitSentence("vamo que vamo"));
//console.log(splitSentence("foguete"));

// Desafio 4
function concatName(lista) {
  let concatenacao = `${lista[lista.length - 1]}, ${lista[0]}`;
  return concatenacao;
}

//console.log(concatName(arrayprimeiro = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//console.log(concatName(arraysegundo = ['foguete', 'não', 'tem', 'ré']));
//console.log(concatName(arrayterceiro = ['captain', 'my', 'captain']));

//console.log(concatName("Aderson Santos","da Silva"));

// Desafio 5
function footballPoints(vencer, empate) {
  return (( vencer * 3 ) + ( empate * 1 ));
}

//console.log(footballPoints(14, 8));
//console.log(footballPoints(1, 2));
//console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maior = Math.max(...numeros);
  for (let chave in numeros){
    if (numeros[chave] === maior){
      contador += 1;
    }
  }
  return contador;
}

//console.log(highestCount(arrayprimeiro = [9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount(arraysegundo = [0, 4, 4, 4, 9, 2, 1]));
//console.log(highestCount(arrayterceiro = [0, 0, 0]));

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let distancia1 = Math.abs(rato - gato1);
  let distancia2 = Math.abs(rato - gato2);
  if (distancia1 === distancia2){
    return "os gatos trombam e o rato foge";
  } else if ( distancia1 < distancia2 ){
    return "cat1";
  } else {
    return "cat2";
  }
}

//console.log(catAndMouse(5, 2, 7));
//console.log(catAndMouse(6, 12, 18));
//console.log(catAndMouse(6, 9, 9));

// Desafio 8
function fizzBuzz(numero) {
  function verificacao(numero){
    if(( numero % 3 == 0 ) && ( numero % 5 == 0 )){
      return "fizzBuzz";
    }else if(numero % 3 == 0){
      return "fizz";
    }else if(numero % 5 == 0){
      return "buzz";
    }else{
      return "bug";
    }
  }

  function fizzBuzz(arrayNumeros){
    let array = [];
    for (let indice = 0; indice < arrayNumeros.length; indice += 1){
      let numero = arrayNumeros[indice];
      array.push(verificacao(numero));
    }
    return array;
  }
}

//console.log(fizzBuzz(arrayprimeiro = [2, 15, 7, 9, 45]));
//console.log(fizzBuzz(arraysegundo = [7, 9]));
//console.log(fizzBuzz(arrayterceiro = [9, 25]));

// Desafio 9
function encode(string) {
  let novaString = "";
  for (let indice in string){
    if (string[indice] === "a"){
      novaString += "1";
    } else if (string[indice] === "e"){
      novaString += "2";
    } else if (string[indice] === "i"){
      novaString += "3";
    } else if (string[indice] === "o"){
      novaString += "4";
    } else if (string[indice] === "u"){
      novaString += "5";
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
}

//console.log(encode("hi there!"));

function decode(string) {
  let novaString = "";
  for (let indice in string){
    if (string[indice] === "1"){
      novaString += "a";
    } else if (string[indice] === "2"){
      novaString += "e";
    } else if (string[indice] === "3"){
      novaString += "i";
    } else if (string[indice] === "4"){
      novaString += "o"
    } else if (string[indice] === "5"){
      novaString += "u";
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
}

//console.log(decode("h3 th2r2!"));

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