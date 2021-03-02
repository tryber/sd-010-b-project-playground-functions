// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(" ");
  return resultado;
}
// Auxilio por orientação:
// https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(array) {
  ultimoValor = array.length - 1
  resultado = array[ultimoValor] + ", " + array[0]
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = (wins * 3 + ties);
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  maiorNumero = Math.max(...numeros)
  recorrencia = 0;
    for (index = 0; index < numeros.length; index++) {
      if (numeros[index] == maiorNumero) {
        recorrencia++
      }
    }
  return recorrencia;
}
// Auxilio por orientação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = mouse - cat1;
  distanciaCat2 = mouse - cat2;

  if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

//console.log(catAndMouse(20, 17, 18))

// Desafio 8
function fizzBuzz(numeros) {
  resultado = [];
  for (index = 0; index < numeros.length; index ++) {
    if ((numeros[index] % 3) == 0 && (numeros[index] % 5) == 0) {
      resultado.push("fizzBuzz")
  } else if ((numeros[index] % 3) == 0) {
      resultado.push("fizz")
  } else if ((numeros[index] % 5) == 0) {
      resultado.push("buzz")
  } else {
      resultado.push("bug!")
  }
}
  return resultado;
}

console.log(fizzBuzz([9, 25]));

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

