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
 return string.split(' ');
}



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
function highestCount(numero) {
  let indiceMaior = 0;
  let contador = 0;
  
  for (let indice in numero){
    if (numero[indiceMaior] < numero[indice])
    indiceMaior = indice; 
  }
  
  for (let key in numero){
    if (numero[key] === numero[indiceMaior]){
      contador += 1;
    }
  }

  return  contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let alcancaPrimeiro = '';

  if (distCat1 < distCat2) {
    alcancaPrimeiro = 'cat1';
  }
  if (distCat2 < distCat1) {
    alcancaPrimeiro = 'cat2';
  }
  if (distCat1 === distCat2) {
    alcancaPrimeiro = 'os gatos trombam e o rato foge';
  }
  return alcancaPrimeiro;
}




// Desafio 8
function fizzBuzz(array, string) {
  string = "";
  for (let index = 0; index < array.length; index += 1){
    if (array[index] %3 === 0 && array[index] %5 === 0){
      string = "FizzBuzz";
    } 
    
    else if (array[index] %3 === 0){
      string = "Fizz";
    } 
    
    else if (array[index] %5 === 0){
      string = "Buzzz";
    }

     else {
      string = "Bug";
    }
  }
  return string;
}
console.log(fizzBuzz([ 7, 9]));




// Desafio 9
function encode(str) {
  let encoderDict = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5
	}

	let arr = str.split("")


	for (let index = 0; index < arr.length; index += 1){
		for (key in encoderDict){
			arr[index] = arr[index]===key ? encoderDict[key] : arr[index]
		}
	}

	return arr.join("")
}
function decode(str) {
  let decoderDict = {
		1:"a",
		2:"e",
		3:"i",
		4:"o",
		5:"u"
	}

	let arr = str.split("")


	for (let index = 0; index < arr.length; index += 1){
		for (key in decoderDict){
			arr[index] = arr[index]===key ? decoderDict[key] : arr[index]
		}
	}

	return arr.join("")
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
