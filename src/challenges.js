// Desafio 1
function compareTrue(num1, num2) {
  let valor = false;
  if (num1 === true && num2 === true) {
    valor = true;
  }
  return valor;
}

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo; 
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = "";
  for (let key in string) {
    if (string[key] != " ") {    
      word += string[key]
    } else if (string[key] == " "){
      arrayString.push(word);
      word = "";
    }   
  }  

  arrayString.push(word);
  return arrayString;
}

console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}` 
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + (ties * 1)
  return points
}

console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))


// Desafio 6
function highestCount(array) {
  let maior = 0;
  let total = 0;
  for (let index = 0; index < array.length; index+=1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }

  for (let index = 0; index < array.length; index+=1) {
    if (array[index] == maior) {
      total += 1;
    }
  }
  
  return total;
}

console.log(highestCount( [9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return "cat1";
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  };
};

console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 3, 3));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
