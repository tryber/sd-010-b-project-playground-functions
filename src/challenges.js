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
function splitSentence(palavras) {
    let resultado = palavras.split(" ");
    return resultado;
}
console.log(splitSentence("go Trybe"))
console.log(splitSentence("vamo que vamo"))
console.log(splitSentence("foguete"))


// Desafio 4
function concatName(arrayname) {
    let concatenandoarray = arrayname[arrayname.length - 1] + ", " + arrayname[0];
    return concatenandoarray;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
    let vitoria = wins * 3;
    let empate = ties * 1;
    let resultado = vitoria + empate;
    return resultado;
}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(arraynumeros) {
    let maiornum = 0;
    let comparativo;
    let contador = 0
    for (let index in arraynumeros) {
        comparativo = arraynumeros[index]
        if (maiornum < comparativo) {
            maiornum = comparativo
        }
    }
    for (let index2 in arraynumeros) {
        let numerorepetido = arraynumeros[index2];

        if (maiornum === numerorepetido) {
            contador++

        }
    }
    return contador
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
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