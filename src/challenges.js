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
function fizzBuzz(numbers) {
  	for (let index in numbers) {
	  	if (numbers[index]%3 == 0 && numbers[index]%5 == 0) {
		  	numbers[index] = "fizzBuzz"
	  	} else if (numbers[index]%3 == 0 && numbers[index]%5 != 0) {
		  	numbers[index] = "fizz"
	  	} else if (numbers[index]%3 != 0 && numbers[index]%5 == 0) {
			numbers[index] = "Buzz"
	  	} else {
			numbers[index] = "bug!"
		}
  }

  return numbers

}

//console.log(fizzBuzz([2, 15, 7, 9, 45]))








// Desafio 9
function encode(sentence) {

	sentence = [...sentence]

	let letters = {
			a: 1,
			e: 2,
			i: 3,
			o: 4,
			u: 5
		}

		for (let caracter in sentence) {
			for (let letter in letters) {
				if (sentence[caracter] == letter) {
					sentence[caracter] = letters[letter]
				}
			}
		}

		let returnSentece = ""

		for (let caracter in sentence) {
			returnSentece += sentence[caracter]
		}
	return returnSentece
}

//console.log(encode(sentence = "hi there!"))

function decode(sentence) {
	sentence = [...sentence]

	let letters = {
			1: 'a',
			2: 'e',
			3: 'i',
			4: 'o',
			5: 'u'
		}

		for (let caracter in sentence) {
			for (let letter in letters) {
				if (sentence[caracter] == letter) {
					sentence[caracter] = letters[letter]
				}
			}
		}

		let returnSentece = ""

		for (let caracter in sentence) {
			returnSentece += sentence[caracter]
		}
	return returnSentece
}

//console.log(decode(sentence = "h3 th2r2!"))


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
