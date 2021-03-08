// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayNomes = array.sort();
  let arrayObj = [];
  for (let i = 0; i < arrayNomes.length; i += 1) {
    arrayObj.push({tech: arrayNomes[i], name: name });
  }
  if (arrayObj.length > 0) {
    return arrayObj;
  } return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = true;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return result;
  } if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return result;
  } if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return result;
  }
  return result = false;
}

// Desafio 13
function somaDrinks(lista) {
  let quant = 0;
  let frase = "";
  for (let i = 0; i < lista.length; i += 1){
    quant += lista[i]; 
    if (quant === 1) {
      frase = "copo de água"; 
    } else {
      frase = "copos de água";
    }
  }
  return quant + " " + frase; 
}

function hydrate(stringDrink) {
  // seu código aqui
  let quantDrink = stringDrink.replace(/([^\d])+/gim, '');
  /* Linha 63 feita consultando o stackoverflow, não conhecia essa função antes. */
  let separarString = quantDrink.split('');
  for (let i = 0; i < separarString.length; i += 1) {
    separarString[i] = parseInt(separarString[i]);
  }
  return somaDrinks(separarString);
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
