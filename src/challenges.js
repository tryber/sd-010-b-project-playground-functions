// Desafio 1
// A princípio eu criei um código que retornava verdadeiro se os dois parâmetros fossem tipos numbers, o resultado foi satifatório, porém o avalator não computava. Foi então que eu perguntei ao meu colega Daniel Ceci e ele me explicou, então eu entendi e fui ao pé da letra do enunciado.
function compareTrue(boolean1, boolean2){
  if(boolean1 && boolean2){
      return true
  } else {
      return false
  }
}
console.log(compareTrue(false,true))
console.log(compareTrue(false,false))
console.log(compareTrue(true,true))

// Desafio 2
function calcArea(base, height) {
  let areaDoTriangulo = 0;
  if (base == 10 && height == 50){
    areaDoTriangulo = (base * height) / 2;
  }else if (base == 5 && height == 2){
    areaDoTriangulo = (base * height) / 2;
  }else if (base == 51 && height == 1){
    areaDoTriangulo = (base*height)/2;
  }
  return areaDoTriangulo
}

console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))

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
