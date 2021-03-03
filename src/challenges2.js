// Desafio 10
function techList(tech, name) {
  let objectListOutput = [];
  let object = {
    tech:tech,
    name: name
  }
  let ordenadedList = object.tech.sort();
  for(let key in ordenadedList) {    
    objectListOutput.push({
        tech: ordenadedList[key],
        name: name
    })
  }
  if (object.tech > 0) {
    return objectListOutput;
  } else {
    return 'Vazio!';
  }  
}

// Desafio 11 ==>>>>> Nao terminei essa ainda!!! Voltar nela!!! <<<<<<==
function generatePhoneNumber(arrayOfNumber) {
  let telePhoneNumber = '(';
  for(let DDD = 0; DDD < 2; DDD += 1) {
  telePhoneNumber += arrayOfNumber[DDD]; 
  }
  telePhoneNumber += ') ';
  for(let first5Numbers = 2; first5Numbers < 7; first5Numbers += 1) {
  telePhoneNumber += arrayOfNumber[first5Numbers];
  }
  telePhoneNumber += '-'
  for(let last4Numbers = 7; last4Numbers < 11; last4Numbers += 1) {
  telePhoneNumber += arrayOfNumber[last4Numbers]; 
  }    
  let repeated = 0;
  let numberCounter = 0;
  let numindex = 0;    
  for(let key in arrayOfNumber){        
      let verifyNumber = arrayOfNumber[key];
      for (let key2 in arrayOfNumber) {
          if(verifyNumber === arrayOfNumber[key2]) {
              numberCounter += 1;
          }
      }
      if (numberCounter > repeated) {
          repeated = numberCounter;
          numindex = key;
      }
      numberCounter = 0;
  }
  let verifyNumberPossibility = 0;
  let verifyNumerOk = 0;  
  for (let index = 0; index < arrayOfNumber.length; index += 1) {                
      if (((arrayOfNumber[index]) < 0) || ((arrayOfNumber[index]) > 9) || (repeated >= 3)) {
          verifyNumberPossibility += 1; 
      } else if ((arrayOfNumber[index] >= 0) && (arrayOfNumber[index] <= 9) && (arrayOfNumber.length == 11)) {
          verifyNumerOk += 1;                    
      } else if (arrayOfNumber.length !== 11) {
          return 'Array com tamanho incorreto.';
      }
      if (verifyNumerOk === 11) {
          return telePhoneNumber;
      } else if (verifyNumberPossibility > 0) {
          return 'não é possível gerar um número de telefone com esses valores';
      }
  }  
console.log(generatePhoneNumber([1, 2, 3, 34, 3, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))){
    return true;
  } else if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))){
    return true;
  } else if ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB))){
    return true;
  } else {
    return false;
  }
}

// Desafio 13  ==>>>>> Nao terminei essa ainda!!! Voltar nela!!! <<<<<<==
function hydrate(stringWithGlasses) {
  let retorno = '';
  let busca = /[1-9]/g;
  
  return retorno; 
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
