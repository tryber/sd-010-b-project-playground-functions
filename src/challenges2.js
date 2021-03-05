// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function difCheck(a, b, c) {
  if (Math.abs(a - b) > c && Math.abs(b - c) > a && Math.abs(c - a) > b) {
    return false;
  }
}
function triangleCheck(a, b, c) {
  let triangle = false;
  if (a + b < c && b + c < a && a + c < b) {
    triangle = false;
  } else if (difCheck(a, b, c) !== false) {
    triangle = true;
  } else {
    triangle = true;
  }
  return triangle;
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
