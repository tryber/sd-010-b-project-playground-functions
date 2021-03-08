// Desafio 10
function techList() {
  


}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  let triCheck = false;
  
  if (a < b + c === true && a > Math.abs(b - c) === true ) {
    triCheck = true;    
  } 
  return triCheck;
}

console.log(triangleCheck(10,14,8))


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
