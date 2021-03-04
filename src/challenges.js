// Desafio 1
function compareTrue(boo1, boo2) {
  let verdadeFalso = boo1 && boo2;
  return verdadeFalso;
} /* Resposta: Criei dois parametros na função e comparei esses dois parametros na variavel
verdadeiroFalso, Dei um return nessa variavel.
 */
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
} /* Resposta: Nessa tentativa de solução do requisito 4, usei os metodos shift e pop. Ao remover o primeiro elemento do array com o metodo shift(), coloco esse elemento na var. palavra1, faço o mesmo com o metodo pop(), onde ele remove o ultimo elemento. O return é a concatenação da palavra, separador(usei a ,) e palavra2. Outra maneira de resolver: return arrayStr[arrayStr.length - 1] + ', ' + arrayStr[0]; (Solução feita pelo Emerson Saturnino) */

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
} /* Resposta: Criei uma Var. totalPontos, nessa var. atribui uma pequena formula para o
 calculo. E dei um return na var. totalPontos */

// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let num1 = 0;
  let num2 = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= num1) {
      num1 = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === num1) {
      num2 += 1;
    }
  }
  return num2;
}
/* Resposta: Com a ajuda do Emerson Saturnino, consegui resolver esse requisito. Foi feito
dois for para iterar duas vezes o mesmo array. O primeiro for faz a verificação do maior
número da array e adiciona o numero na var. num1. O Segundo for faz a verificação novamente
na array e compara com a variavel num1. Cada numero repetido é amazernado na var. num2 */

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// console.log(catAndMouse(0, 6, 12));

/* Resposta: Na tentativa de solucionar o setimo requisito, fiz
comparações entre os parametros dada pela function. Posição é 0 do
mouse e N posições de cat1 e cat2. Adicionei duas variaveis onde
calcula a distancia entre um cat e mouse. Com ajuda de colegas da turma
entendi que preciso garantir que a posição do cat1 e cat2 precisa ser
absoluta. A primerira maneira que achei foi o math.abs, link:https://
developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/
Global_Objects/Math/abs */

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      let palavra1 = 'fizzBuzz';
      newArray.push(palavra1);
    } else if (arrayNumbers[index] % 3 === 0) {
      let palavra2 = 'fizz';
      newArray.push(palavra2);
    } else if (arrayNumbers[index] % 5 === 0) {
      let palavra3 = 'buzz';
      newArray.push(palavra3);
    } else {
      let palavra4 = 'bug!';
      newArray.push(palavra4);
    }
  }
  return newArray;
} /* Resposta: Para solucionar esse requisito fiz uma estrutura de repetição para iterar o
array. A cada vez que o loop passa pelo numero ele compara com a condição colocada(ifs e else). se a condição for atingida faz um push, metodo para colocar um novo elemento na array(no caso essa essa array é uma vazia, newArray) na ultima posição do indice, assim fazer o retorno dessa nova array.
 */
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str1) {
  let codigo = str1;
  for (let index = 0; index < str1.length; index += 1) {
    codigo = codigo.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4)
      .replace('u', 5);
  }
  return codigo;
}

/* Resposta : Na primeira alternativa de resolução tentei usar o metodo replace()
metodo esse que faz tornar possivel iterar caracter de uma string e substituir com outro elemento ou uma propria string.Link da pesquisa:https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176. No primeiro envio não
passou no requisito, pois estava usando o metodo da maneira errada. Persebi com o dote notetion consigo fazer o comando de uma maneira que da certo. */
// console.log(encode('hi there!'));

function decode(str2) {
  let codigo = str2;
  for (let index = 0; index < str2.length; index += 1) {
    codigo = codigo.replace(1, 'a').replace(2, 'e').replace(3, 'i').replace(4, 'o')
      .replace(5, 'u');
  }
  return codigo;
}
console.log(decode('h3 th2r2!'));

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
