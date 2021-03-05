// Desafio 10
function techList(array, name) {
  let lista = array.sort();
  let newArray = [];
  for (let index = 0; index < lista.length; index += 1) {
    let bloco = {
      tech: lista[index],
      name: name
    }
    newArray.push(bloco);
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  } else {
    return newArray;
  };
};


// Desafio 11
function generatePhoneNumber(numbersphone) {
  let bloco = {};
  let istrue = false;
  if (numbersphone.length == 11) {
    for (let index = 0; index < 11; index += 1) {
      if (numbersphone[index] < 0 || numbersphone[index] > 9) {
        return ("não é possível gerar um número de telefone com esses valores");
        istrue = true;
        break;
      };
      let quantidade = 0;
      for (let j = 0; j < numbersphone.length; j += 1) {
        if (numbersphone[index] == numbersphone[j]) {
          quantidade += 1;
        };
      };
      bloco[numbersphone[index]] = quantidade;
    }
    for (keys in bloco) {
      if (bloco[keys] >= 3) {
        return ("não é possível gerar um número de telefone com esses valores");
        istrue = true;
        break;
      };
    };
  };
  if (numbersphone.length == 11 && istrue == false) {
    return `(${numbersphone[0]}${numbersphone[1]}) ${numbersphone[2]}${numbersphone[3]}${numbersphone[4]}${numbersphone[5]}${numbersphone[6]}-${numbersphone[7]}${numbersphone[8]}${numbersphone[9]}${numbersphone[10]}`
  } else if (numbersphone.length > 11 || numbersphone.length < 11) {
    return 'Array com tamanho incorreto.';
  };
};

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let sumAC = (lineA + lineC);
  let sumAB = (lineA + lineB);
  let sumBC = (lineB + lineC);
  let difAC = Math.abs(lineA - lineC);
  let difAB = Math.abs(lineA - lineB);
  let difBC = Math.abs(lineB - lineC);
  if ((sumAB > lineC) && (sumBC > lineA) && (sumAC > lineB) && (difAC < lineB) && (difAB < lineC) && (difBC < lineA)) {
    return true;
  } else {
    return false;
  };
};


// Desafio 13
function hydrate(str) {

  let string = str.split('');
  let soma = 0;
  let isnotspace = [];
  for (key in string) {
    if (string[key] != ' ') {
      isnotspace.push(string[key]);
    };
  };
  for (let index = 0; index < isnotspace.length; index += 1) {
    if (!isNaN(isnotspace[index])) {
      soma += parseInt(isnotspace[index]);
    };
  };
  if (soma <= 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  };
};



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
