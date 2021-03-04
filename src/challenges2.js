// Desafio 10
function techList(array, nameUser) {

	if (array.length == 0) {

		return "Vazio!"

	} else {

		arrayReturn = []
  
		for (let item in array) {
			arrayReturn.push(
				{
					tech: array[item],
					name: nameUser
				})
		}

		return arrayReturn
	}

}

/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas")) */

function tresVezesOuMais(numbers) {

	numQtd = {}

	for (let index in numbers) {
		numQtd[numbers[index]] = 0
	}

	for (let i = 0; i < numbers.length; i++) {
		for (let key in numQtd) {
			if(numbers[i] == key){
				numQtd[key] = numQtd[key]+1
			}
		}
	}

	numQtdToArray = []
	cont = 0
	for (let key in numQtd) {
		numQtdToArray[cont++] = numQtd[key]
	}

	if (numQtdToArray.sort()[numQtdToArray.length-1] >=3) {

		return false

	} else {

		return true

	} 

}



// Desafio 11
function generatePhoneNumber(numbers) {

	let menorQueZero = false
	let maiorQueNove = false
	let maiorQueTresNumeros = false

	for (let index in numbers) {
		if (numbers[index] < 0) {
			menorQueZero = true
		} else if (numbers[index] > 9) {
			maiorQueNove = true
		}
	}

	if (tresVezesOuMais(numbers) == false) {
		maiorQueTresNumeros = true
	}

	if (numbers.length != 11) {

		return 'Array com tamanho incorreto'

	} else if (maiorQueNove || menorQueZero || maiorQueTresNumeros) {

		return "não é possível gerar um número de telefone com esses valores"
	} else {
		stringNumber = ''

	numbers.unshift('(')
	numbers.splice(3,0,')')
	numbers.splice(4,0,' ')
	numbers.splice(10,0,'-')

	for (let index in numbers) {
		stringNumber += numbers[index]
	}

	return stringNumber
	}
  
} 

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
