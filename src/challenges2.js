// Hello! Welcome to my playground!

// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  const techList = [];
  const sortedArray = tech.sort();
  for (let index = 0; index < sortedArray.length; index += 1) {
    techList[index] = {
      tech: sortedArray[index],
      name: name,
    };
  }
  return techList;
}

// Desafio 11
function generatePhoneNumber(arr) {
  //starting checks
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  //mapping the arr, could do another function, but for practice sake and the evaluetor i did not.
  const arrMap = {};
  for (let index = 0; index < arr.length; index += 1) {
    if (!arrMap[arr[index]]) {
      arrMap[arr[index]] = 1;
    } else {
      arrMap[arr[index]] += 1;
    }
  }

  // finding the most repeated number in array, also could do another function for this.
  let mostRepeatedNumber = 1;
  for (let key in arrMap) {
    if (arrMap[key] > mostRepeatedNumber) {
      mostRepeatedNumber = arrMap[key];
    }
  }
  //last checks
  const safeArray = arr.slice();
  const sortedArray = arr.sort((a, b) => a - b);
  if (
    mostRepeatedNumber > 2 ||
    sortedArray[0] < 0 ||
    sortedArray[sortedArray.length - 1] > 9
  )
    return 'não é possível gerar um número de telefone com esses valores';
  //creating string
  let parenthesis = '';
  let firstPart = '';
  let lastPart = '';

  for (let index = 0; index < 2; index += 1) {
    if (index == 0) {
      parenthesis += `(${safeArray[index]}`;
    } else {
      parenthesis += `${safeArray[index]}) `;
    }
  }

  for (let index = 2; index < 7; index += 1) {
    if (index == 6) {
      firstPart += `${safeArray[index]}-`;
    } else {
      firstPart += safeArray[index];
    }
  }

  for (let index = 7; index < 11; index += 1) {
    lastPart += safeArray[index];
  }

  return parenthesis + firstPart + lastPart;
}

function triangleCheck(a, b, c) {
  const validA = b + c > a && Math.abs(b - c) < a;
  const validB = a + c > b && Math.abs(c - a) < b;
  const validC = a + b > c && Math.abs(b - a) < c;
  return validA && validB && validC;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  const drankTimes = string.match(/\d+/g).reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  }, 0);
  return `${drankTimes} copo${drankTimes > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
