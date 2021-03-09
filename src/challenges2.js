// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(telNumbers) {
  let menor = false
	let maior = false
	let maisQueTres = false

	for (let index in telNumbers) {
		if (telNumbers[index] < 0) {
			menor = true
		} else if (telNumbers[index] > 9) {
			maior = true
		}
	}

	if (contadorVezes(telNumbers) == false) {
		maisQueTres = true
	}

	if (telNumbers.length != 11) {

		return 'Array com tamanho incorreto'

	} else if (maior || menor || maisQueTres) {

		return "não é possível gerar um número de telefone com esses valores"
	} else {
		stringNumber = ''

  	telNumbers.unshift('(')
  	telNumbers.splice(3,0,')')
    
    stringNumber += telNumbers[index]
	}

  return stringNumber
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

function contadorVezes(numbers) {

	quantidade = {}

	for (let index in numbers) {
		quantidade[numbers[index]] = 0
	}

	for (let i = 0; i < numbers.length; i++) {
		for (let index2 in quantidade) {
			if(numbers[i] == index2){
				quantidade[index2] = quantidade[index2]+1
			}
		}
	}

	array2 = []
	cont = 0
	for (let index3 in quantidade) {
		array2[cont++] = quantidade[index3]
	}

	if (array2.sort()[array2.length-1] >=3) {

		return false

	} else {

		return true

	} 

}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
