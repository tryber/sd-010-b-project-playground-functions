// Desafio 10
function techList(tech, name){
    let objeto = [];
    let tech2 = tech.sort();

    if (tech2.length === 0) {
      return 'Vazio!'
    }
    for (let key = 0; key < tech2.length; key += 1) {
      objeto.push({ tech: tech2[key], name: name});
    }
    return objeto;
  }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "André"));
     
// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let numbers = [phoneNumber];
  let repeatedNumbers = []

 for (let key = 0; key < phoneNumber.length; key += 1){ 
   for (let key2 = 1; key2 <= 9; key2 +=1){
  
     }
   }
   if (phoneNumber.length !== 11){
     return "Array com tamanho incorreto"
   } else if (phoneNumber[key] < 0) { 
     return "não é possível gerar um número de telefone com esses valores"
   } else if (phoneNumber[key] > 9){
     return "não é possível gerar um número de telefone com esses valores"
   }
    else {
     return "(" + phoneNumber[0] + phoneNumber[1] + ")" + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]
   }
  }
 }
console.log(generatePhoneNumber([1, 2, 3, 4, 7, 6, 5, 8, 4, 9]))
console.log(generatePhoneNumber([1, 2, 3, 4, 7, 6, 5, 8, -4, 9, 2]))
console.log(generatePhoneNumber([1, 2, 3, 4, 10, 6, 5, 8, 4, 9, 2]))
console.log(generatePhoneNumber([1, 2, 3, 4, 7, 2, 5, 8, 6, 9, 2]))
console.log(generatePhoneNumber([1, 2, 3, 4, 7, 6, 5, 8, 4, 9, 2]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)){
    return true
  } else {
    return false
  } 
}
console.log(triangleCheck(20, 10, 8))
console.log(triangleCheck(10, 20, 8))
console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(string) {
  let quantidade = parseInt(string)
  return quantidade + " " + "copos de agua"
}
console.log(hydrate("2 copos de cerveja"))
console.log(hydrate("7 copos de uisque"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
