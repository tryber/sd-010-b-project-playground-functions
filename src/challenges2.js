// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  if (
		Math.abs(lineB+lineC) < lineA < lineB+lineC &&
		Math.abs(lineA+lineC) < lineB < lineA+lineC &&
		Math.abs(lineA+lineB) < lineC < lineA+lineB
		) {

			return true

		} else {

			return false

		}

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
