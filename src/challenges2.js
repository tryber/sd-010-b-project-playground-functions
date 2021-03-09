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

	if (tresVezesOuMais(telNumbers) == false) {
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
