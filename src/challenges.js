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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1)
	let cat2Position = Math.abs(mouse - cat2)
  let nearCat = ""
	if(cat1Position === cat2Position) {
		nearCat = "os gatos trombam e o rato foge"
	} else {
		nearCat = cat1Position < cat2Position ? "cat1" : "cat2"
	}

	return nearCat
}

// Desafio 8
function fizzBuzz(arr) {
	let fizzBuzzArr = []
	for (let index = 0; index < arr.length; index += 1) {
		if (arr[index]%3 === 0 && arr[index]%5 === 0){
			fizzBuzzArr.push("fizzBuzz")
		} else if (arr[index]%3 === 0 || arr[index]%5 === 0) {
			fizzBuzzArr.push(arr[index]%3 === 0 ? "fizz" : "buzz")
		} else {
			fizzBuzzArr.push("bug!")
		}
	}
	return fizzBuzzArr
}

// Desafio 9
function encode(str) {
  let encoderDict = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5
	}

	let arr = str.split("")


	for (let index = 0; index < arr.length; index += 1){
		for (key in encoderDict){
			arr[index] = arr[index]===key ? encoderDict[key] : arr[index]
		}
	}

	return arr.join("")

}
function decode(str) {
  let decoderDict = {
		1:"a",
		2:"e",
		3:"i",
		4:"o",
		5:"u"
	}

	let arr = str.split("")


	for (let index = 0; index < arr.length; index += 1){
		for (key in decoderDict){
			arr[index] = arr[index]===key ? decoderDict[key] : arr[index]
		}
	}

	return arr.join("")
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

// REFERÊNCIAS >>

// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://stackoverflow.com/questions/8260156/how-do-i-create-dynamic-variable-names-inside-a-loop