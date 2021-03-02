// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
// console.log(calcArea(10,50));

// Desafio 3
function splitSentence(fraseADividir) {
  // Busquei orientação para resolver o item no site: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  let fraseDividida = fraseADividir.split('' '');
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
  let pontosTotais = ((wins * 3) + (ties * 1));
  return pontosTotais;
}
// console.log(footballPoints(1, 2));

// Desafio 6 dica de pegar maior com função no site: https://backefront.com.br/encontrar-maior-numero-array/
function highestCount(numeros) {
  let maiorNumero = Math.max(...numeros);
  let contadorMaiorNumero = 0;
  console.log(maiorNumero);
  for (let key in numeros) {
    if (numeros[key] === maiorNumero) {
      contadorMaiorNumero += 1;
    }
  }

  return contadorMaiorNumero;
}
let numero = [9, 1, 9, 3, 9, 5, 7];
console.log(highestCount(numero));

// console.log(highestCount(numeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distaciaCat1Mouse = Math.abs(cat1 - mouse);
  let distaciaCat2Mouse = Math.abs(cat2 - mouse);
  console.log(distaciaCat1Mouse);
  console.log(distaciaCat2Mouse);
  let winerCat;
  if (distaciaCat1Mouse > distaciaCat2Mouse) {
    winerCat = 'cat2';
  } else if (distaciaCat1Mouse < distaciaCat2Mouse) {
    winerCat = 'cat1';
  } else {
    winerCat = 'os gatos trombam e o rato foge';
  }
  return winerCat;
}
let mouse = 1;
let cat1 = 0;
let cat2 = 2;

console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
function fizzBuzz(numeros) {
  let numerosConvertidos = [];
  for (let key in numeros) {
    if (((numeros[key] % 3) === 0) && ((numeros[key] % 5) === 0)) {
      numerosConvertidos.push('fizzBuzz');
    } else if ((numeros[key] % 3) === 0) {
      numerosConvertidos.push('fizz');
    } else if ((numeros[key] % 5) === 0) {
      numerosConvertidos.push('buzz');
    } else {
      numerosConvertidos.push('bug!');
    }
  }
  return numerosConvertidos;
}
// let numerosFizzBuzz = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(numeros));

// Desafio 9 Busquei orientação para resolver o item no site: https://pt.stackoverflow.com/questions/170/qual-a-forma-correta-de-se-fazer-uma-substitui%C3%A7%C3%A3o-regular-em-javascript-para-tod
function encode(frase) {
  let fraseTrocada;

  fraseTrocada = frase.split('a').join(1);
  fraseTrocada = fraseTrocada.split('e').join(2);
  fraseTrocada = fraseTrocada.split('i').join(3);
  fraseTrocada = fraseTrocada.split('o').join(4);
  fraseTrocada = fraseTrocada.split('u').join(5);
  return fraseTrocada;
}
let frase1 = 'How are you today?';
console.log(encode(frase1));

function decode(frase) {
  let fraseTrocada;
  fraseTrocada = frase.split(1).join('a');
  fraseTrocada = fraseTrocada.split(2).join('e');
  fraseTrocada = fraseTrocada.split(3).join('i');
  fraseTrocada = fraseTrocada.split(4).join('o');
  fraseTrocada = fraseTrocada.split(5).join('u');
  return fraseTrocada;
}
let frase2 = 'H4w 1r2 y45 t4d1y?';
console.log(decode(frase2));

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
