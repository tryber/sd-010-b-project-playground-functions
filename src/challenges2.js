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
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lara'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
const hydrate = (drinks) => {
  const numberArr = [];
  const drinksSplit = drinks.split(' ');
  console.log(drinksSplit);
  const numberDrinks = drinksSplit.forEach((numbers) => {
    if(typeof drinksSplit[i] === 'number') {
      
    }
});
  return drinksSplit;
};
console.log(hydrate('12 cerveja, 5 cachaças'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
