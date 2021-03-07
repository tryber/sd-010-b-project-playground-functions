// Desafio 10
function techList(namesTechs, name) {
  let objTechList = [];
  if (namesTechs.length == 0){
    return "Vazio"
  }
  namesTechs.sort();
  for(let i in namesTechs){
    objTechList.push({
      tech : namesTechs[i],
      name : name
    })
  }
  return objTechList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Adão"));
// Desafio 11
// function generatePhoneNumber() {
// }
function arrayLength (arrNumbers){
  let result = false;
  if (arrNumbers.length != 11){
    result = true;
  }
  if (arrayLength) {return result};
}
function arrNumMaxMin (arrNumbers){
  let result = false;
  for  (let i in arrNumbers){
    if (arrNumbers[i] < 0 || arrNumbers[i] > 9){
      result = true;    
    }
  }
  return result;
}
function countNum (arrNumbers, num){
  let countNumber = 0;
  for (let i in arrNumbers){
    if (num == arrNumbers[i]){
      countNumber += 1;
    } 
  }
  return countNumber;
}
function checkNumberRepeated (arrNumbers){
  let sumNumRepeated = 0;
  let result = false;
  for (let i in arrNumbers){
    sumNumRepeated = countNum(arrNumbers, arrNumbers[i]);
    if (sumNumRepeated >= 3){
      result = true;
     }
  }
  return result;
}
// resolução baseado na pesquisa https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// resolução baseado na pesquisa https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function generatePhoneNumber(arrNumbers){
if (arrayLength(arrNumbers)) return 'Array com tamanho incorreto.';
if (arrNumMaxMin(arrNumbers) || checkNumberRepeated(arrNumbers)) return 'não é possível gerar um número de telefone com esses valores';
let joinArrNumbers = arrNumbers.join('');
let DDD = joinArrNumbers.slice(0, 2);
let prefix = joinArrNumbers.slice(2, 7);
let sufix = joinArrNumbers.slice(7, 11);
let numberPhone = '(' + DDD + ')' + prefix + '-' + sufix;
return numberPhone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 9, 9, 1, 8, 7]));

// Desafio 12
//function triangleCheck() {
//}
function checkLineA (lineA, lineB, lineC){
  let result = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    result = true
  }
  return result;
}
function checkLineB (lineA, lineB, lineC){
  let result = false;
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    result = true
  }
  return result;
}
function checkLineC (lineA, lineB, lineC){
  let result = false;
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)){
    result = true
  }
  return result;
}
function triangleCheck(lineA, lineB, lineC){
  let result = false;
  if (checkLineA(lineA, lineB, lineC) && checkLineB(lineA, lineB, lineC) && checkLineC(lineA, lineB, lineC)){
    result = true;
  }
  return result;
}
console.log(triangleCheck(10, 5, 15))

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
