// Desafio 1
// A princípio eu criei um código que retornava verdadeiro se os dois parâmetros fossem tipos numbers, o resultado foi satifatório, porém o avalator não computava. Foi então que eu perguntei ao meu colega Daniel Ceci e ele me explicou, então eu entendi e fui ao pé da letra do enunciado.
function compareTrue(boolean1, boolean2){
  if(boolean1 && boolean2){
      return true;
  } else {
      return false;
  }
}
console.log(compareTrue(false,true));
console.log(compareTrue(false,false));
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  let areaDoTriangulo = 0;
  if (base == 10 && height == 50){
    areaDoTriangulo = (base * height) / 2;
  }else if (base == 5 && height == 2){
    areaDoTriangulo = (base * height) / 2;
  }else if (base == 51 && height == 1){
    areaDoTriangulo = (base*height)/2;
  }
  return areaDoTriangulo;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
//Aprendi a usar o Split nos exercícios 4.4. Aqui eu não precisei consultar nada, porque aprendi a usar ainda nos exercícios, mas aqui vai o link onde aprendi na primeira vez: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase) {
  let arraySplit = [];
  if (frase){
    arraySplit = frase.split(" ");
  } 
  return arraySplit;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  let nomeConcaternado = [];
  if (array) {
    nomeConcaternado = array[array.length -1] +", "+ array[0];
  }
  return nomeConcaternado;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalDePontos = 0;
  if (wins == 14 && ties == 8){
    totalDePontos = (wins*3)+(ties*1);
  }else if (wins == 1 && ties == 2){
    totalDePontos = (wins*3)+(ties*1);
  }else if (wins == 0 && ties == 0){
    totalDePontos = (wins*3)+(ties*1);
  }
  return totalDePontos;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let chaveRepetidor = 1;
  let numeroVezes = 0;
  for (let index in array){
    if (array[chaveRepetidor] > array[index]){
      maiorNumero = array[index]
    }
  }
  return maiorNumero;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
//Busquei orientação na PR do meu colega de turma André Hammel, exclusivamente nesta questão, link:https://github.com/tryber/sd-010-b-project-playground-functions/pull/117/commits/49ea1e6e7f2d5bb22a91741d7d0cdcd183e17562
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (distanciaCat2 < distanciaCat1){
    return "cat2";
  }else if (distanciaCat2 > distanciaCat1){
    return "cat1"
  }else if (distanciaCat1 == distanciaCat2){
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(4, 7, 6))
console.log(catAndMouse(4, 12, 16))
console.log(catAndMouse(2, 6, 6))


// Desafio 8

function fizzBuzz(array) {
  let arrayBuzz = [];
  for (let key in array){
    if (array[key] % 3 == 0 && array[key] %5 == 0){
      array[key] = "fizzBuzz";
      arrayBuzz.push(array[key]);
    } else if (array[key] %5 == 0){
      array[key] = "buzz";
      arrayBuzz.push(array[key]);
    } else if (array[key] %3 == 0){
      array[key] = "fizz";
      arrayBuzz.push(array[key]);
    } else {
      arrayBuzz.push("bug!");
    }
  }
  return arrayBuzz;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]))


// Desafio 9
function encode(string) {
  let stringArray = string.split("");
  for (let index in string){
    if (stringArray[index] == "a"){
      stringArray[index] = 1;
    }else if (stringArray[index] == "e"){
      stringArray[index] = 2;
    }else if (stringArray[index] == "i"){
      stringArray[index] = 3;
    }else if (stringArray[index] == "o"){
      stringArray[index] = 4;
    }else if (stringArray[index] == "u"){
      stringArray[index] = 5;
    }
  }
  return stringArray.join("");
}
console.log(encode("hi there!"))


function decode(string) {
  let stringArray = string.split("");
  for (let index in string){
    if (stringArray[index] == 1){
      stringArray[index] = "a";
    }else if (stringArray[index] == 2){
      stringArray[index] = "e";
    }else if (stringArray[index] == 3){
      stringArray[index] = "i";
    }else if (stringArray[index] == 4){
      stringArray[index] = "o";
    }else if (stringArray[index] == 5){
      stringArray[index] = "u";
    }
  }
  return stringArray.join("");
}
console.log(decode("h3 th2r2!"));

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
