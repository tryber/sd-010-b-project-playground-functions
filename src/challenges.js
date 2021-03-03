// Desafio 1
function compareTrue(boo1, boo2) {
  let verdadeFalso = boo1 && boo2;
  return verdadeFalso;
}// Resposta: Criei dois parametros na função e comparei esses dois parametros na variavel verdadeiroFalso, Dei um return nessa variavel.

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}// Resposta: Fiz a formula dentro da variavel trangulo e dei um return nessa variavel.

// Desafio 3
function splitSentence(str) {
  let newArray = str.split(' ');
  return newArray;
} // Resposta: Nesse requisito criei um parametro str na function para receber qualquer string. Dentro da function criei uma variavel para receber a string tranformada em uma array de string. Para fazer isso usei o metodo split(), e usei o separador com uma string vazia. Fiz o return da variavel newArray. Link que tirei como base a minha solução:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Desafio 4
function concatName(arrayStr) {
  let palavra1 = '';
  let palavra2 = '';
  let separador = ', ';
  for (let index = 0; index < arrayStr.length - 1; index += 1) {
    palavra1 = arrayStr.pop();
    palavra2 = arrayStr.shift();
  }
  return palavra1 + separador + palavra2;
}// Resposta: Nessa tentativa de solução do requisito 4, usei os metodos shift e pop. Ao remover o primeiro elemento do array com o metodo shift(), coloco esse elemento na var. palavra1, faço o mesmo com o metodo pop(), onde ele remove o ultimo elemento. O return é a concatenação da palavra, separador(usei a ,) e palavra2. Outra maneira de resolver: return arrayStr[arrayStr.length - 1] + ', ' + arrayStr[0]; (Solução feita pelo Emerson Saturnino)

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
} // Resposta: Criei uma Var. totalPontos, nessa var. atribui uma pequena formula para o calculo. E dei um return na var. totalPontos

// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let num1 = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (index === array[index]) {
      num1 += array[index];
    }
  }
  return num1;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = mouse - cat1;
  let disCat2 = mouse - cat2;
  if (disCat1 === disCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (disCat1 < disCat2) {
    return 'cat2';
  }
  return 'cat1';
}
// console.log(catAndMouse(13, 6, 12));

// Resposta: Na tentativa de solucionar o setimo requisito, fir comparações entre os parametros dada pela function. Posição é 0 do mouse e N posições de cat1 e cat2. Adicionei duas variaveis onde calcula a distancia entre um cat e mouse.

// Desafio 8
function fizzBuzz() {

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
