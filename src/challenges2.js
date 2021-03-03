// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  const arr = tech.sort().map( function(nomes) {
    return Object.assign({tech: nomes} , {name: name});
  });
  return arr;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thiago'));

// Desafio 11
function generatePhoneNumber(number) {
  let a = number.slice()

  const repeat = function repeatedNumbers() {
    // Verificando se tem mais de 3 números repetidos no array
    let duplicates = number.slice()
    let result = []
    for (let i = 0; i < duplicates.length -1; i++) {
      if (duplicates[i + 1] == duplicates[i]) {
        result.push(duplicates[i])
      }
    }
    return result.lenght
  }
  
  const arrNum = function arrayNumbers() {
    // Verificando a quantidade correta de números do array
    if (number.length < 12 && number.length > 10) {
      return false
    } else {
      return true
    }
  }

  const validator = function isValid() {
    let validaNum = []
    // Verificando se os números são válidos
    for (let i = 0; i < number.length; i++) {
      if (number[i] < 0 || number[i] > 9) {
        return false
      } else {
        validaNum += validaNum
      }
    }
    return validaNum
  }

  if (arrNum || validator() === false || repeat >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  }  else {
    return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  }
}

console.log(generatePhoneNumber([1,1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
