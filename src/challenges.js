// Desafio 1
function compareTrue(bool1, bool2) {
  let value = undefined;
	if (bool1 && bool2){
		value = true
	} else {
		value = false
	}

	return value
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
	return area
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ")
}

// Desafio 4
function concatName(arr) {
  let lastNfirst = []
	lastNfirst[0] = arr[arr.length-1]
	lastNfirst[1] = arr[0]

	return lastNfirst.join(", ")
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3
	let tiesPoints = ties * 1
	let total = winPoints + tiesPoints

	return total;
}

// Desafio 6
function highestCount(arr) {
  arr.sort((a, b) => a-b)
	let amount = 0
	for (let index = 0; index < arr.length; index += 1){
		if(arr[index] === arr[arr.length-1]){
			amount += 1
		}
	}

	return amount
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
