// Desafio 10
let techList = () => {

}

// Desafio 11
let generatePhoneNumber =(argArray) => {
  let result = [];
  argArray.sort();
  for (let argName of argArray) {
    let object = {
      tech: argName,
      names: `${names}`,
    };
    result.push(object);
  }
  return result;
}

// Desafio 12
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// A soma dos comprimentos de quaisquer dois lados de um triângulo deve ser maior que o comprimento do terceiro lado. 
// Por exemplo, os números 3, 4 e 5 podem formar um triângulo porque 3 4 > 5, 4 5 > 3 e 5 3 > 4.
// Em contraste, os números 1, 2 e 5 não podem formar um triângulo porque 1 2 < 5.
function triangleCheck(sideA, sideB, sideC) {
  let checkA = sideA < sideB + sideC && sideA; 
  let checkB = sideB < sideA + sideC && sideB;
  let checkC = sideC < sideB + sideA && sideC;
    return checkA && checkB && checkC;
}

// Desafio 13
let hydrate = (num) => {
  let numbers = num.replace(/[^0-9]/g,'');
  let numbersArr = numbers.split("");
  let somaNumbers = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    somaNumeros += parseInt(numbersArr[i]);    
  }
  return somaNumbers === 1 ? somaNumbers+" copo de água" : somaNumbers +" copos de água";
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
