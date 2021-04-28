// Desafio 10
const techList = (arrayTech, name) => {
  if (arrayTech.length !== 0) {
    const listTech = arrayTech.sort()
      .map((technology) => ({
        tech: technology,
        name,
      }));
    return listTech;
  }
  return 'Vazio!';
};
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lara'));

// Desafio 11
function generatePhoneNumber(arr) {
  const transformString = arr.join('');
  const ddd = transformString.substring(0, 2);
  const firstFiveNumbs = transformString.substring(2, 7);
  const forNumbsEnd = transformString.substring(7, 11);
  const result = `(${ddd}) ${firstFiveNumbs}-${forNumbsEnd}`;
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let repeaterCounter = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[index] === arr[i]) {
        repeaterCounter += 1;
      }
      if (repeaterCounter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  if (lineB < (lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  }
  if (lineC < (lineA + lineB) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
const hydrate = (drinks) => {
  const regex = /\d+/g;
  const string = drinks;
  const numberInString = string.match(regex);

  let accum = 0;
  for (let index = 0; index < numberInString.length; index += 1) {
    accum += parseInt(numberInString[index], 10);
  }
  if (accum === 1) {
    return '1 copo de água';
  }
  return `${accum} copos de água`;
};
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
