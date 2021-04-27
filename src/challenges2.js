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
    return 'Array com tamanho incorreto';
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 20]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
const hydrate = () => {
//   const numberArr = [];
//   const drinksSplit = drinks.split(' ');
//   console.log(drinksSplit);
//   const numberDrinks = drinksSplit.forEach((numbers) => {
//     if(typeof drinksSplit[i] === 'number') {
//     }
// });
//   return drinksSplit;
};
// console.log(hydrate('12 cerveja, 5 cachaças'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
