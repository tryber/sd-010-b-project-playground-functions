// Desafio 1
function compareTrue(valora,valorb) {
  // seu código aqui
  if((valora === true) && (valorb === true)){
    return true;
  }
  else{
    return false;
  }
  

}

// Desafio 2
function calcArea(base,height) {

return (base*height)/2;
  
}

// Desafio 3
function splitSentence(stringuinha) {
  // seu código aqui
  let separateOfStrings = stringuinha.split(" ");
  return separateOfStrings;
}

// Desafio 4
function concatName(stringuinha) {
  // seu código aqui
  
  //https://www.w3schools.com/js/js_arrays.asp
  //ensinando como pegar o ultimo valor e primeiro valor de array de strings
  let primeiro = stringuinha[0];
  let ultimo = stringuinha[stringuinha.length - 1];

  
  return ultimo + "," + " " + primeiro;
}


// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  return(wins*3)+(ties*1);
}


// Desafio 6
function highestCount(array) {
    // seu código aqui
    // https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
    // como dito o apply passa os valores do array para função math.max e assim ela analisa o maior.
    
    let maior = Math.max.apply(null,array);
    //inicializo o contador em 0
    let count = 0;
    let countatt;
    for(let i = 0;i < array.length; i+= 1){
          if(array[i] === maior){
            count+=1;
          }
          //armazeno a contagem infelizmente não verifiquei depois de acertar se raciocio esta certo mas acho que count sera
          //atualizado e essa linha abaixo e inutil
        countatt = count;        
    }          
         
  return countatt;
}

// Desafio 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse,cat1,cat2) {

  let catone = Math.abs(cat1-mouse);
  let catwo = Math.abs(cat2-mouse);
  
    if(catone<catwo){
      return "cat1";
    }
    else if (catone>catwo){
      return "cat2";
    }
    else if (catone === catwo) {
      return "os gatos trombam e o rato foge";
    }

}


// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // seu código aqui
  let arrayOfStrings = [];
  for (let i = 0; i < arrayOfNumbers.length; i+= 1){
    if((arrayOfNumbers[i] % 3 == 0) && (arrayOfNumbers[i] % 5 == 0)){
      arrayOfStrings[i] = 'fizzBuzz';
    }
    else if (((arrayOfNumbers[i] % 3 == 0) && (arrayOfNumbers[i] % 5 != 0))){
      arrayOfStrings[i] = 'fizz';
    }
    else if (((arrayOfNumbers[i] % 3 != 0) && (arrayOfNumbers[i] % 5 == 0))){
      arrayOfStrings[i] = 'buzz';

    }
    else {
      arrayOfStrings[i] = 'bug!';
    }
  }
  
  return arrayOfStrings;
}

// Desafio 9
function encode(stringuinha) {
  // seu código aqui
  let encoder = stringuinha;
for(let i = 0; i < stringuinha.length; i += 1){
  encoder = encoder.replace('a','1');
  encoder = encoder.replace('e','2');
  encoder = encoder.replace('i','3');
  encoder = encoder.replace('o','4');
  encoder = encoder.replace('u','5');
}
  return encoder;
}

function decode(stringuinha) {
  // seu código aqui
  let encoder = stringuinha;
  for(let i = 0; i < stringuinha.length; i += 1){
    encoder = encoder.replace('1','a');
    encoder = encoder.replace('2','e');
    encoder = encoder.replace('3','i');
    encoder = encoder.replace('4','o');
    encoder = encoder.replace('5','u');
  }
    return encoder;
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
