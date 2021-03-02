// Desafio 1
let verdadeiro = true;
let falso = false;
let teste = true;

function compareTrue(valor1, valor2) {
    let comparador = false;
    if ((valor1 == true) && (valor2 == true)) {
        comparador = true;
    }

    return comparador
}
console.log(compareTrue(teste, verdadeiro))

// Desafio 2
function calcArea(base, height) {
    let calculo = (base * height) / 2

    return calculo
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
    // seu código aqui
}

// Desafio 4
function concatName() {
    // seu código aqui
}

// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
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