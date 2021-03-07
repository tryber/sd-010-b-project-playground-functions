// Desafio 10
// let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let techs = [];
// let name = "Jonnes";
// console.log(techList(techs, name));
// I found this logic at https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function sortByTech(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

function techList(techs, name) {
  let list;
  if (techs.length === 0) {
    list = 'Vazio!';
  } else {
    list = [];
    for (let i = 0; i < techs.length; i += 1) {
      let newTech = {
        tech: techs[i],
        name,
      };
      list.push(newTech); // I found this push function at https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    }
    list.sort(sortByTech);
  }
  return list;
}

// Desafio 11
// (12) 34567-8901
// let amountOfDrinks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(amountOfDrinks));
function verifyArrayNumbers(array) {
  let countRepeated = new Array(10).fill(0); // I found how to fill an array with 0 at https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
  let aux = 0;
  for (let i = 0; i < array.length; i += 1) {
    countRepeated[array[i]] += 1;
    if (countRepeated[array[i]] >= 3) {
      aux = 1;
    }
  }
  return aux;
}

function verify09(array) {
  let aux = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      aux = 1;
    }
  }
  return aux;
}

function phoneNumber(array) {
  let template = '(**) *****-****';
  let j = 0;
  for (let i = 0; i < template.length; i += 1) {
    if (template[i] === '*') {
      template = template.replace(template[i], array[j += 1]);
    }
  }
  return template;
}

function generatePhoneNumber(amountOfDrinks) {
  let reply;
  if (amountOfDrinks.length !== 11) {
    reply = 'Array com tamanho incorreto.';
  } else if (verifyArrayNumbers(amountOfDrinks) === 3 || verify09(amountOfDrinks) !== 0) {
    reply = 'não é possível gerar um número de telefone com esses valores';
  } else {
    reply = phoneNumber(amountOfDrinks);
  }
  return reply;
}

// Desafio 12
// let a = 10, b = 14, c = 8;
// console.log(triangleCheck(a, b, c));
// I found the Math.abs() function at https://www.w3schools.com/jsref/jsref_abs.asp
function testA(a, b, c) {
  return ((a < (b + c)) && (a > Math.abs(b - c)));
}

function testB(a, b, c) {
  return ((b < (a + c)) && (b > Math.abs(a - c)));
}

function testC(a, b, c) {
  return ((c < (a + b)) && (c > Math.abs(a - b)));
}

function triangleCheck(lineA, lineB, lineC) {
  let trueOrFalse = false;
  console.log(trueOrFalse);
  if (testA(lineA, lineB, lineC) || testB(lineA, lineB, lineC) || testC(lineA, lineB, lineC)) {
    trueOrFalse = true;
  }
  return trueOrFalse;
}

// Desafio 13
// let orderPad = "1 cachaça, 5 cervejas e 6 copo de vinho";
// console.log(hydrate(orderPad));
// I took the logic of getDigits and cupsOfWaterCups from this video: https://youtu.be/pfkkdzeyx6U
function getDigits(orderPad) {
  let regExp = /\d+/g; // regExp: Regular Expression, to get amount of drinks
  let amountOfDrinks = orderPad.match(regExp); // Add digits to the amountOfDrinks array
  return amountOfDrinks;
}

function cupsOfWaterCups(digits) {
  let total = 0;
  for (let i = 0; i < digits.length; i += 1) {
    total += parseInt(digits[i], 10);
  }
  return total;
}

function hydrate(orderPad) {
  let waterCups = cupsOfWaterCups(getDigits(orderPad));
  let waterSuggestion;
  if (waterCups > 1) {
    waterSuggestion = `${waterCups} copos de água`;
  } else {
    waterSuggestion = `${waterCups} copo de água`;
  }
  return waterSuggestion;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
