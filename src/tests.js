function hydrate(string) {
const stringIn = string;
let numberSum = 0;
for (let i = 0; i < stringIn.length; i += 1) {
  if (parseInt(stringIn[i])) {
    numberSum += parseInt(stringIn[i]); 
  }
}
const stringSum = String(numberSum);
 if (numberSum === 1) {
   return `${stringSum} copo de água`;
 } else {
   return  `${stringSum} copos de água`
 }
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))