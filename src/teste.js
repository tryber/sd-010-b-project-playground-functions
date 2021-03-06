function quantasVezesONumeroApareceNoArray(number, numbers) {
  let cont = 0;
  for (let n = 0; n < numbers.length; n += 1) {
    if (number === numbers[n]) {
      cont += 1;
    }
  }
  return cont;
}

function tresVezesOuMais(numbers) {
  let relNumQtd = {}; let qtd = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    qtd = quantasVezesONumeroApareceNoArray(numbers[index], numbers);
    relNumQtd[numbers[index]] = qtd;
  }
  let numberMore = 0;
  for (let key in relNumQtd) {
    if (relNumQtd[key] > numberMore) {
      numberMore = relNumQtd[key];
    }
  }
  let messege = null;
  if (numberMore >= 3) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
}
console.log(tresVezesOuMais([1, 1, 1, 2]));
