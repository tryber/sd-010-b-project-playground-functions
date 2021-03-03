// Desafio 10
function techList(arrayList, nome) {
  let arrayVazio = 'Vazio!';
  if (arrayList.length <= 0) {
    return arrayVazio;
  }
  let arraySorted = arrayList.sort();
  let newArray = [];
  for (let index = 0; index < arraySorted.length; index += 1) {
    newArray[index] = {
      tech: arrayList[index],
      name: nome
    }
  }
  return newArray;
}
/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));
console.log(techList([],"Lucas")); */

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let number = [];
  
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers.length != 11) {
      return 'Array com tamanho incorreto.';
    }
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      number = arrayNumbers.slice(0,2);
      number = number + arrayNumbers.slice(2,7)
      number = number + arrayNumbers.slice(7,11);
    } 
  }
  return number;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let subAB = Math.abs(lineA - lineB);
  let sumAC = lineA + lineC;
  let subAC = Math.abs(lineA - lineC); 
  let sumBC = lineB + lineC;
  let subBC = Math.abs(lineB - lineC);

  if (lineA < sumBC && lineA > subBC) {
    return true;
  } else if (lineB < sumAC && lineB > subAC) {
    return true;
  } else if (lineC < sumAB && lineC > subAB) {
    return true;
  } 
  return false;
}
/* console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 1, 2));
console.log(triangleCheck(10, 30, 8)); */

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
