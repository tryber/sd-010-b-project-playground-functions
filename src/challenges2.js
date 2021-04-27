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

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  numbers.forEach((number) => {
    if (countRepeats(numbers, number) > 3 || number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  });
  const n01 = `${numbers[0]}${numbers[1]}`;
  const n23456 = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  const n78910 = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `(${n01}) ${n23456}-${n78910}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineC - lineB))
    || (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA))
    || (lineC < lineB + lineA && lineC > Math.abs(lineA - lineB))
  ) {
    check = true;
  }
  return check;
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
