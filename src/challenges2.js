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
function generatePhoneNumber() {
  // seu código aqui
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
