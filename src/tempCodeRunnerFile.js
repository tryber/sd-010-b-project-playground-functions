// Desafio 13
function hydrate(frase) {
  let messege = null;
  let numbers = (frase.match(/\d+/g));

  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 10);
  }
  
  messege = sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
  return messege;
}

console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));