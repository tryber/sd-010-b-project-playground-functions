// Desafio 10
function techList(arrayTech, nam) {
  // seu código aqui
  if (arrayTech.length == 0) {
    return "Vazio!"
  } else {
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
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}
//   for (index = 0; index < arrayPhoneNumber.length; index += 1) {
//     if (arrayPhoneNumber[index] < 0 || arrayPhoneNumber[index] > 9 ||)
//   }

//   let DDD = (`(${arrayPhoneNumber[0]}${arrayPhoneNumber[1]}) `);
//   let firstPart = (`${arrayPhoneNumber[2]}${arrayPhoneNumber[3]}${arrayPhoneNumber[4]}${arrayPhoneNumber[5]}${arrayPhoneNumber[6]}-`)
//   let secondPart = (`${arrayPhoneNumber[7]}${arrayPhoneNumber[8]}${arrayPhoneNumber[9]}${arrayPhoneNumber[10]}`)

//   return (`${DDD}${firstPart}${secondPart}`)
// }

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
