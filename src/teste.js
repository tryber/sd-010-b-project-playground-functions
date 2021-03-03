let numbers = [9, 1, 2, 3, 9, 5, 7];
let higherNumber = numbers[0];
let qtd = 0;

for (let index=0; index < numbers.length; index+=1) {
c8  if (higherNumber == numbers[index] ) {
    qtd = qtd + 1;
  }
}
console.log(qtd);