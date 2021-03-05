// Desafio 10
function techList(tecnologias, name) {
  let info = {
   };
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
    let resultado;
  if (Math.abs(a) < Math.abs(b + c) && Math.abs(a) > Math.abs(b - c) && Math.abs(a) > Math.abs(c - b)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
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
