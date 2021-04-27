// Desafio 10
function techList(array, name) {
  let listOfObjetcts = [];
  let arrayOrdenada = array.sort();
  if (array.length < 1) {
    listOfObjetcts = 'Vazio!';
  } else {
    for (let index = 0; index < arrayOrdenada.length; index += 1) {
      let object = {
        tech: arrayOrdenada[index],
        name,
      };
      listOfObjetcts.push(object);
    }
  }
  return listOfObjetcts;
}

const countRepeats = (arr, element) => {
  const elementsIntheArray = arr.filter((currElement) => currElement === element);
  return elementsIntheArray.length;
};

const validateNumber = (numbers, number) => {
  if (countRepeats(numbers, number) > 3 || number < 0 || number > 9) {
    return true;
  }
};

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  for (let i = 0; i < numbers.length; i += 1) {
    if (validateNumber(numbers, numbers[i])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const n01 = `${numbers[0]}${numbers[1]}`;
  const n23456 = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  const n78910 = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `(${n01}) ${n23456}-${n78910}`;
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));

// Desafio 12

const lnCcker = (line1, line2, line3) => (line1 < line2 + line3 && line1 > Math.abs(line3 - line2));

function triangleCheck(lineA, lineB, lineC) {
  const check1 = lnCcker(lineA, lineB, lineC);
  const check2 = lnCcker(lineB, lineA, lineC);
  const check3 = lnCcker(lineC, lineA, lineB);
  return (check1 || check2 || check3);
}

// Desafio 13
// A utilização da função replace() foi feita após consulta ao stackoverflow
// link: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
// A utilização da função parseInt() foi feita após consulta à W3Schools
// link:  https://www.w3schools.com/jsref/jsref_parseint.asp
function hydrate(string) {
  let onlyNumbers = string.replace(/\D/g, '');
  let numbersSplited = onlyNumbers.split('');
  let sumOfTheNumbers = 0;
  for (let index = 0; index < numbersSplited.length; index += 1) {
    sumOfTheNumbers += parseInt(numbersSplited[index], 10);
  }
  let feedback = '';
  if (sumOfTheNumbers < 2) {
    feedback = `${sumOfTheNumbers} copo de água`;
  } else {
    feedback = `${sumOfTheNumbers} copos de água`;
  }
  return feedback;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
