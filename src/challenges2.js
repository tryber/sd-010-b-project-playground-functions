// Desafio 10
// let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let techs = [];
// let name = "Jonnes";
// console.log(techList(techs, name));
function techList(techs, name) {
  if (techs.length === 0) {
    return "Vazio!"
  } else {
    let list = [];
    for (let i = 0; i < techs.length; i++) {
      newTech = {
        tech: techs[i],
        name: name
      };
      list.push(newTech) // I found this push() function at https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    }
    list.sort(sortByTech);
  
    return list;
  }
}

// I found this logic at https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function sortByTech(a, b) {
  if ( a.tech < b.tech ){
    return -1;
  }
  if ( a.tech > b.tech ){
    return 1;
  }
  return 0;
}

// Desafio 11
// (12) 34567-8901
// let amountOfDrinks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(amountOfDrinks));
function generatePhoneNumber(amountOfDrinks) {
  if (amountOfDrinks.length !== 11) {
    return "Array com tamanho incorreto.";
  } else if (verifyArrayNumbers(amountOfDrinks) === 3 || verify09(amountOfDrinks) !== 0) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return phoneNumber(amountOfDrinks);
  }
}

function verifyArrayNumbers(array) {
  let countRepeated = new Array(10).fill(0); // I found how to fill an array with 0 at https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    countRepeated[array[i]]++;
    if (countRepeated[array[i]] >= 3){
      aux = 1;
    }
  }
  if (aux === 0) {
    return 0;
  } else {
    return 3;
  }
}

function verify09(array) {
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 | array[i] > 9) {
      aux = 1;
    }
  }
  if (aux === 0) {
    return 0;
  } else {
    return 1;
  }
}

function phoneNumber(array) {
  let template = "(**) *****-****";
  let j = 0;
  for (let i = 0; i < template.length; i++) {
    if (template[i] === "*"){
      template = template.replace(template[i], array[j++]);
    }
  }
  return template;
}

// Desafio 12
// let a = 10, b = 14, c = 8;
// console.log(triangleCheck(a, b, c));
function triangleCheck(lineA, lineB, lineC) {
  if (lessThanSumGreaterThanAbs(lineA, lineB, lineC) === true ) {
    return true;
  } else {
    return false;
  }
}

// I found the Math.abs() function at https://www.w3schools.com/jsref/jsref_abs.asp
function lessThanSumGreaterThanAbs(a, b, c) {
  if ((a < (b + c)) && (a > Math.abs(b - c))) {
    return true;
  } else if ((b < (a + c)) && (b > Math.abs(a - c))){
    return true;
  } else if ((c < (a + b)) && (c > Math.abs(a - b))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
// let orderPad = "0 cachaça, 0 cervejas e 0 copo de vinho";
// console.log(hydrate(orderPad));
function hydrate(orderPad) {
  let water = cupsOfWater(getDigits(orderPad));
  if (water > 1) {
    return water + " copos de água";
  } else {
    return water + " copo de água";
  }
}

// I took the logic of getDigits and cupsOfWater from this video: https://youtu.be/pfkkdzeyx6U
function getDigits(orderPad) {
  let regExp = /\d+/g; // regExp: Regular Expression, to get amount of drinks
  let amountOfDrinks = orderPad.match(regExp); // Add digits to the amountOfDrinks array
  return amountOfDrinks;
}

function cupsOfWater(digits) {
  let total = 0;
  for (let i = 0; i < digits.length; i++) {
    total += parseInt(digits[i]);
  }
  return total;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
