// Desafio 10
function techList() {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '') {
      array[index] = 'Vazio';
    }
    let list = {
      tech: array[index],
      name,
    };
    result.push(list);
  }
  return result;
}

function techList(techs, name) {
  let result = [];
  let array = techs.sort();

  if (techs.length === 0) {
    result = 'Vazio!';
  } else {
    result = obj(array, name);
  }
  return result;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
