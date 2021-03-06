function tresVezesOuMais(numbers) {
  let numberRelatedQtd = {};
  let qtd = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers.includes(numbers[index])) {
      qtd += 1;
    }
  }
  numberRelatedQtd[numbers[index]] = qtd;
  qtd = 0;

  console.log(numberRelatedQtd);
}

tresVezesOuMais([1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
