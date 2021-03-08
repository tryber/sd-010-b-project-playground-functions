// Desafio 1
function compareTrue(para1, para2) {
  if (para1 == true && para2 == true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(array) {
  array = array.split(" ");
  return array;
}
console.log(splitSentence("vamo que vamo"))

// Desafio 4
function concatName(string) {
  let nomes = string[string.length - 1] + ", " + string[0];
  return nomes;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + ties;
  return resultado;
}
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(valores) {
  let max = 0;
  let repeat = 0;
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] > max) {
      max = valores[index]
    }
  }
  for (let key in valores) {
    if (valores[key] === max) {
      repeat += 1
    }
  }
  return repeat
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = 0;
  let gato2 = 0;
  if (cat1 > mouse) {
    gato1 = cat1 - mouse;
  }
  if (cat1 < mouse) {
    gato1 = mouse - cat1;
  }
  if (cat2 > mouse) {
    gato2 = cat2 - mouse;
  }
  if (cat2 < mouse) {
    gato2 = mouse - cat2;
  }
  if (gato1 === gato2) {
    return 'os gatos trombam e o rato foge'
  } else if (gato1 > gato2) {
    return 'cat2'
  } else {
    return 'cat1'
  }
}
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(array) {
  let param = array;
  let calculo = [];
  for (let indexNumb = 0; indexNumb < param.length; indexNumb += 1) {
    if (param[indexNumb] % 3 == 0 && param[indexNumb] % 5 == 0) {
      calculo.push("fizzBuzz")
    } else if (param[indexNumb] % 3 == 0) {
      calculo.push("fizz");
    } else if (param[indexNumb] % 5 == 0) {
      calculo.push("buzz");
    } else {
      calculo.push("bug!");
    }
  }
  return calculo;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  let stringPronto = [];
  let stringPronta = "";
  for (let key in string) {
    if (string[key] === "a") {
      stringPronto.push("1");
    } else if (string[key] === "e") {
      stringPronto.push("2");
    } else if (string[key] === "i") {
      stringPronto.push("3");
    } else if (string[key] === "o") {
      stringPronto.push("4");
    } else if (string[key] === "u") {
      stringPronto.push("5");
    } else {
      stringPronto.push(string[key]);
    }
  }
  for (let key in stringPronto) {
    stringPronta += stringPronto[key];
  }
  return stringPronta
}
console.log(encode("hi there!"))

function decode(string) {
  let stringPronto = [];
  let stringPronta = "";
  for (let key in string) {
    if (string[key] === "1") {
      stringPronto.push("a");
    } else if (string[key] === "2") {
      stringPronto.push("e");
    } else if (string[key] === "3") {
      stringPronto.push("i");
    } else if (string[key] === "4") {
      stringPronto.push("o");
    } else if (string[key] === "5") {
      stringPronto.push("u");
    } else {
      stringPronto.push(string[key]);
    }
  }
  for (let key in stringPronto) {
    stringPronta += stringPronto[key];
  }
  return stringPronta
}
console.log(decode("h3 th2r2!"))


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
