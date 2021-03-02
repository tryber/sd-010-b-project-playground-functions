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
function footballPoints(wins, ties) {
  return wins*3+ties
}

//console.log(footballPoints(1, 2))

// Desafio 6
function highestCount(numbers) {
	higherNumber = 0

	for (let number in numbers) {
		if (numbers[number] > higherNumber) {
			higherNumber = numbers[number]
		}
	}
	cont = 0
	for (let index in numbers) {
		if (numbers[index] == higherNumber) {
			cont++
		}
	}

	return cont
  
}

//console.log(highestCount([100, 4, 11, 4, 4, 9, 2, 1, 11, 11, 11, 100]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

	let disRatoGato1 = mouse-cat1
	let disRatoGato2 = mouse-cat2

	if (disRatoGato1 < 0) {
		disRatoGato1*=-1
	}
	if (disRatoGato2 < 0) {
		disRatoGato2*=-1
	}

	if (disRatoGato1 < disRatoGato2) {
		return "cat1"
	} else if (disRatoGato2 < disRatoGato1) {
		return "cat2"
	} else {
		return "os gatos trombam e o rato foge"
	}

}

//	console.log(catAndMouse(100, 99, 99))

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
