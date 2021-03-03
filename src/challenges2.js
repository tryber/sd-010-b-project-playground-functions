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

// Desafio 11
function generatePhoneNumber(numbers) {

	stringNumber = ''

	numbers.unshift('(')
	numbers.splice(3,0,')')
	numbers.splice(4,0,' ')
	numbers.splice(10,0,'-')

	for (let index in numbers) {
		stringNumber += numbers[index]
	}

	console.log(stringNumber)
  
}

//generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

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
