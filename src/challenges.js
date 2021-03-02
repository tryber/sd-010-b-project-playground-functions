// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
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
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]},  ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse_position, cat1_position, cat2_position) {
  if (cat1_position == cat2_position){
    return "os gatos trombam e o rato foge";
  } else if (mouse_position - cat1_position < mouse_position - cat2_position) {
    return "cat1";
  } else {
    return "cat2";
  }
}
// Desafio 8
function fizzBuzz(array_number) {
  let array = [];
  for (index = 0; index < array_number.length; index += 1) {
    if (array_number[index] % 3 == 0 && array_number[index] % 5 == 0) {
      array[index] = "fizzBuzz";
    } else if (array_number[index] % 3 == 0) {
      array[index] = "fizz";
    } else if (array_number[index] % 5 == 0) {
      array[index] = "buzz";
    } else {
      array[index] = "bug!";
    }
  }
  return array;
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
