// Desafio 10
function techList(tec, name) {
  const tecOrder = tec.sort();
  const arrayTec = [];
  tecOrder.forEach((tech) => {
    arrayTec.push({
      tech,
      name,
    });
  });
  return arrayTec;
}

function containsThree(numbers) {
  let contador = 0;
  let boolean = false;
  numbers.forEach((number1) => {
    numbers.forEach((number2) => {
      if (number1 === number2) {
        contador += 1;
        if (contador === 3) {
          boolean = true;
        }
      }
    });
    contador = 0;
  });
  return boolean;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const biggerOrSmaller = numbers.some((number) => (number < 0 || number > 9));

  if (biggerOrSmaller || containsThree(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const textPhone = numbers.join('');
  const partOne = textPhone.slice(0, 2);
  const partSec = textPhone.slice(2, 7);
  const partThr = textPhone.slice(7, 11);
  return `(${partOne}) ${partSec}-${partThr}`;
}
function returnMathAbs(a, b) {
  return Math.abs(a - b);
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let boolean = false;
  if (returnMathAbs(lineA, lineB) < lineC
    || returnMathAbs(lineA, lineC) < lineB
    || returnMathAbs(lineB, lineC) < lineA) {
    boolean = true;
  }
  return boolean;
}

// Desafio 13
function hydrate(string) {
  // codigo para retirar os numeros da string veio de referencia do https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript#:~:text=A%20alternativa%20seria%20simplesmentar%20retornar,fazer%20o%20parse%20para%20inteiro.&text=N%C3%A3o%20sei%20se%20minha%20solu%C3%A7%C3%A3o,(%2F%5Cd%2Fg).
  const numbers = string.split('').filter((n) => (Number(n) || n === 0)).join('');
  const arrNumbersInString = numbers.split('');
  const arrNumbersInNumber = arrNumbersInString.map((number) => Number(number));
  const sumNumbers = arrNumbersInNumber.reduce((acc, curr) => {
    acc += curr;
    return acc;
  });
  return sumNumbers;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
