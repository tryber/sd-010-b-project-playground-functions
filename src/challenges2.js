// Hello! Welcome to my playground!

// Challenge 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  const techArray = [];
  const sortedArray = tech.sort();
  for (let index = 0; index < sortedArray.length; index += 1) {
    techArray[index] = {
      tech: sortedArray[index],
      name,
    };
  }
  return techArray;
}

// Challenge 11

function getMappedArray(arr) {
  const arrMap = {};
  for (let index = 0; index < arr.length; index += 1) {
    if (!arrMap[arr[index]]) {
      arrMap[arr[index]] = 1;
    } else {
      arrMap[arr[index]] += 1;
    }
  }
  return arrMap;
}

function findMostRepeatedNumberInObject(arrMap) {
  let mostRepeatedNumber = 1;
  for (let key in arrMap) {
    if (arrMap[key] > mostRepeatedNumber) {
      mostRepeatedNumber = arrMap[key];
    }
  }
  return mostRepeatedNumber;
}

function generatePhoneNumber(arr) {
  const a = arr.slice();
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  const arrMap = getMappedArray(arr);
  let mostRepeatedNumber = findMostRepeatedNumberInObject(arrMap);
  const sortedArray = arr.sort((b, c) => b - c);
  if (
    mostRepeatedNumber > 2
    || sortedArray[0] < 0
    || sortedArray[sortedArray.length - 1] > 9
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // creating string
  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
}

// Challenge 12

function returnTrueOrFalse(a, b, c) {
  return a && b && c;
}

function triangleCheck(a, b, c) {
  const validA = b + c > a && Math.abs(b - c) < a;
  const validB = a + c > b && Math.abs(c - a) < b;
  const validC = a + b > c && Math.abs(b - a) < c;
  return returnTrueOrFalse(validA, validB, validC);
}

// Challenge 13
function hydrate(string) {
  const drankTimes = string
    .match(/\d+/g)
    .reduce((acc, curr) => Number(acc) + Number(curr), 0);
  return `${drankTimes} copo${drankTimes > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
