// Desafio 10
function techList(array, name) {
  if (array.length != 0) {
    let ordenada = array.sort();
    let lista = [];
    for (let key in ordenada) {
      let dicionario = {
        tech: ordenada[key],
        name: name
      }
      lista.push(dicionario);
    }
    return lista;
  } else {
    return 'Vazio!'
  }
}

// teste itam 10
// namePessoal = 'Lucas';
// array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(array, namePessoal));
// namePessoal = 'Lucas';
// array1 = [];
// console.log(techList(array1, namePessoal));

// Desafio 11
function generatePhoneNumber(array) {
  let invalido = true;
  if (array.length === 11) {
    for (let key in array) {
      if (array[key] < 0 || array[key] > 9) {
        invalido = false;
        break;
      }
      let counter = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === array[key]) {
          counter++
        }
      }
      if (counter >= 3) {
        invalido = false;
      }
    }
    if (invalido != false) {
      return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
    } else {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  } else {
    return 'Array com tamanho incorreto.'
  }
}

// teste item 11
// array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(array0));
// array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(generatePhoneNumber(array1));
// array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
// console.log(generatePhoneNumber(array2));
// array3 = [111, 2, 3, 4, 15, 6, 7, 8, 9, 0, 99];
// console.log(generatePhoneNumber(array3));






// Desafio 12
function triangleCheck() {
  // seu código aqui
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
