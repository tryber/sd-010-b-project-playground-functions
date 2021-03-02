// Desafio 1
function compareTrue() {
  let a = true
  let b = true

  if(a==true && b==true){
    console.log(true)
  }else{
    console.log(false)
  }
}

// Desafio 2
function calcArea() {
  let base = 51;
  let height = 1;
  let area = (base*height)/2
  console.log(area)
}

// Desafio 3
function splitSentence() {
  let frase = ("foguete").split(" ")
  console.log(frase)
}

// Desafio 4
function concatName() {

  let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
  let newArray = []
  for(let index =0; index < array.length; index += 1){

    if(index==0 || (index == (array.length -1))){
      newArray.unshift(array[index])
    }
  }
  console.log(newArray)
  console.log(array.length -1)

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
