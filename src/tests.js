function catAndMouse(mouse, cat1, cat2) {
  posCounterCat1 = mouse - cat1;
  posCounterCat2 = mouse - cat2;
  counter1 = 0;
  counter2 = 0;

  if (posCounterCat1 < 0) {
    posCounterCat1 *= (-1)
  }

  if (posCounterCat2 < 0) {
    posCounterCat2 *= (-1)
  }

  for (let index = 0; index < posCounterCat1; index += 1) {
    counter1 += 1;
  }
  for (let index = 0; index < posCounterCat2; index += 1) {
    counter2 += 1;
  }

  let resultado = ''
  if (counter1 < counter2) {
    resultado = 'cat1'
    return resultado;
  } else if (counter2 < counter1) {
    resultado = 'cat2'
    return resultado;
  } else {
    resultado = "os gatos trombam e o rato foge"
    return resultado;
  }

}
console.log(catAndMouse(10, 10, 10));
