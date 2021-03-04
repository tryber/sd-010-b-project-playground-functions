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
      name: nome,
    };
  }
  return newArray;
}
/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));
console.log(techList([],"Lucas")); */

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index] === arrayNumbers[index2]) {
        cont += 1;
      }
    }
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let arrayNumber = [`(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`];
  let number = arrayNumber.join('');
  return number;
}
/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([0, 1, 6]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([])); */

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
  }
  if (lineB < sumAC && lineB > subAC) {
    return true;
  }
  if (lineC < sumAB && lineC > subAB) {
    return true;
  }
  return false;
}
/* console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 1, 2));
console.log(triangleCheck(10, 30, 8)); */

// Desafio 13
function hydrate(string) {
  let numberString = string.match(/\d+/g).map(Number); // código retirado no site: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let cont = 0;

  for (let index = 0; index < numberString.length; index += 1) {
    cont += numberString[index];
  }

  let suggestion = '';
  suggestion = `${cont} copos de água`;

  if (numberString.length === 1) {
    suggestion = '1 copo de água';
  }
  return suggestion;
}
/* console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));
console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')); */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
