// Desafio 10
function techList(arrayTech, name) {
  let objFinal = [];
  arrayTech.sort();
  if (arrayTech.length !== 0) {
    for (let index = 0; index < arrayTech.length; index += 1) {
      let obj = {
        tech: arrayTech[index],
        name: name
      };
      objFinal.push(obj);
    };
    return objFinal;
  };
  if (arrayTech.length == 0) {
    return 'Vazio!'
  };
};


// Desafio 11
function generatePhoneNumber(phoneNum) {
  let ddd = '';
  let fisrtPart = '';
  let secondPart = '';
  let obj = {};
  if (phoneNum.length !== 11) {
    return "Array com tamanho incorreto."
  };
  for (let index = 0; index < phoneNum.length; index += 1) {
    if (obj[phoneNum[index]] === undefined) {
      obj[phoneNum[index]] = 1;
    } else {
      obj[phoneNum[index]] += 1;
    };
    if (phoneNum[index] < 0 || phoneNum[index] > 9 || obj[phoneNum[index]] >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    };
    if (index <= 1) {
      ddd += phoneNum[index];
    } else if (index <= 6) {
      fisrtPart += phoneNum[index];
    } else {
      secondPart += phoneNum[index];
    };
  };
  return `(${ddd}) ${fisrtPart}-${secondPart}`
};



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = lineB + lineC;
  let checkLineB = lineA + lineC;
  let checkLineC = lineA + lineB;
  let absLineA = Math.abs(lineB - lineC);
  let absLineB = Math.abs(lineA - lineC);
  let absLineC = Math.abs(lineA - lineB);
  if (lineA < checkLineA && lineA > absLineA) {
    if (lineB < checkLineB && lineB > absLineB) {
      if (lineC < checkLineC && lineC > absLineC) {
        return true;    
      }
    }
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let sum = 0; 
  let num = string.replace(/[^0-9]/g,'');      
  let arrayNum = num.split('')
  for (let index = 0; index < arrayNum.length; index += 1) {    
    sum += parseInt(arrayNum[index]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }

  return `${sum} copos de água`;
}

//REFERENCIA => https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
