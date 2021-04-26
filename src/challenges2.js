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
  if (returnMathAbs(lineA, lineB) < lineC) {
    if (returnMathAbs(lineA, lineC) < lineB) {
      if (returnMathAbs(lineB, lineC) < lineA) {
        boolean = true;
      }
    }
  }
  return boolean;
}
console.log(triangleCheck(10, 14, 2));
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
