// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }

}
 console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}
// console.log(calcArea(10,50));

// Desafio 3
function splitSentence(str) {
  // Busquei orientação para resolver o item no site: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  let fraseDividida = str.split(" ");
  return fraseDividida;
}
// console.log(splitSentence("Mariana Mohr Silveira"));

// Desafio 4
function concatName(listaNomes) {
  let tamanhoLista = listaNomes.length;
  let nomes = listaNomes[tamanhoLista - 1] + ", " + listaNomes[0];
  return nomes;
}
// let listaNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(listaNomes));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = ((wins * 3) + (ties * 1))
  return pontosTotais;
}
// console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let contadorMaiorNumero = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    if (maiorNumero > numeros[i]) {
      maiorNumero = numeros[i];
      contadorMaiorNumero = 1;
    } else if (maiorNumero === numeros[i]) {
      maiorNumero = numeros[i];
      contadorMaiorNumero += 1;
    } else if (maiorNumero < numeros[i]) {
      contadorMaiorNumero = contadorMaiorNumero;
    }
  }
  return contadorMaiorNumero;
}
let numeros = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(numeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winerCat;
  if (cat1 > cat2) {
    winerCat = "cat2";
  } else if (cat1 < cat2) {
    winerCat = "cat1";
  } else {
    winerCat = "os gatos trombam e o rato foge";
  }
  return winerCat;
}
let cat1 = 12;
let cat2 = 12;
let mouse = 0;
// console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
function fizzBuzz(numeros) {
  let numerosConvertidos = [];

  for (key in numeros) {
    if (((numeros[key] % 3) === 0) && ((numeros[key] % 5) === 0)) {
      numerosConvertidos.push("fizzBuzz");
    } else if ((numeros[key] % 3) === 0) {
      numerosConvertidos.push("fizz");
    } else if ((numeros[key] % 5) === 0) {
      numerosConvertidos.push("buzz");
    } else {
      numerosConvertidos.push("bug!")
    }
  }
  return numerosConvertidos;
}
let numerosfizzbuz = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(numeros));

// Desafio 9
function encode(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    switch (frase[i]) {
      case "a":
        frase[i] = 1;
        break;
      case "2":
        frase[i] = 2;
        break;
      case "1":
        frase[i] = 3;
        break;
      case "o":
        frase[i] = 4;
        break;
      case "u":
        frase[i] = 5;
        break;
        default:
          console.log("vogal nao encontrads");
    }
  }
  return frase;
}
let frase = "hi there";
console.log(encode(frase));

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
