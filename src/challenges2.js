// Desafio 10
function techList(arrayTech, nam) {
  // seu código aqui
  let arrayTechSort = arrayTech.sort()
  let arrayFinal = []

  for (index = 0; index < arrayTechSort.length; index += 1) {
    let final = {}
    final["tech"] = arrayTechSort[index]
    final["name"] = nam
    
    arrayFinal.push(final)
  }
  return arrayFinal
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Gerald"))

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  // seu código aqui
  for (index = 0; index < arrayPhoneNumber.length; index += 1) {
  if (arrayPhoneNumber[index] < 0 || arrayPhoneNumber[index] > 9 || )
  }

  return (`(${arrayPhoneNumber[1]}${arrayPhoneNumber[2]}) ${arrayPhoneNumber[3]}${arrayPhoneNumber[4]}${arrayPhoneNumber[5]}${arrayPhoneNumber[6]}${arrayPhoneNumber[7]}-${arrayPhoneNumber[8]}${arrayPhoneNumber[9]}${arrayPhoneNumber[10]}${arrayPhoneNumber[11]}`)
}

console.log(generatePhoneNumber([9,9,2,5,7,8,9,1,2,3]))

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
