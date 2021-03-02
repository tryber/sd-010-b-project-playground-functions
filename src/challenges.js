// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {

    return true

  } else {

    return false

  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(sentenca) {
	sentenca+=" "
    splitWords = []
	word = ""
	length = sentenca.length-1

	for (let i = 0; i < sentenca.length; i++) {
		if (sentenca[i] != " ") {
			word += sentenca[i]
		} else if (sentenca[i] == " " || i == length) {
			splitWords.push(word)
			word = ""
		}
	}

	return splitWords
}

//console.log(splitSentence("foguete"))

// Desafio 4
function concatName(arraySentence) {
	
  return `${arraySentence[arraySentence.length-1]}, ${arraySentence[0]}`
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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
