function highestCount(array) {
  let maiorNumero = 0;
  let repete = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      repete += 1;
    }
  }
  return maiorNumero;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
