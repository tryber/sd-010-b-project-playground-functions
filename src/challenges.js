// Desafio 1
function compareTrue(x, y) {
  return x && y;
}


////////////////////////////////////////////////////////////////////////////////////
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 3
function splitSentence(string) {
 return string.split('');
}
console.log(splitSentence ( "go Trybe" ));


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
function concatName(lista) {
  let concat = lista[lista.length -1] + ", " + lista[0];
  return concat;
}

//////////////////////////////////////////////////////////////////////////////////////
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3 ) + (ties * 1));
}

// Desafio 6
function highestCount() {
  let higherNumber = 0;
  let counter = 0;
  for (const i in numbers) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
      counter = 0;
    }
  }
  for (const i in numbers) {
    if (numbers[i] == higherNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return  Math . abs ( cat1  -  rato )  <  Matem . abs ( cat2  -  rato ) ? "cat1" : Matemática . abs ( cat2  -  rato )  <  Matem . abs ( cat1  -  rato ) ? "cat2" : "os gatos trombam e o rato foge" ;
}

// Desafio 8
function fizzBuzz(umaLista) {
  let out = [];
  for (let key in umaLista) {
    if (umaLista[key] % 3 == 0 && umaLista[key] % 5 == 0){
      out.push("fizzBuzz");
    }else if (umaLista[key] % 3 == 0){
      out.push("fizz");
    }else if (umaLista[key] % 5 == 0){
      out.push("buzz");
    }else{
      out.push("bug!")
    }
  }
  return out;
}

// Desafio 9
function encode(umaFrase) {
  lista = umaFrase.split("");

  for (let key in lista) {
    switch(lista[key]) {
      case "a":
      lista[key] = 1;
      break;
      case "e":
      lista[key] = 2;
      break;
      case "i":
      lista[key] = 3;
      break;
      case "o":
      lista[key] = 4;
      break;
      case "u":
      lista[key] = 5;
      break;
    }
  }
  return lista.join("");
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
