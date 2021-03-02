// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    
  if (lineA < lineB + lineC && lineA > (math.abs(lineB - lineC)) && lineA > math.abs(lineC - lineB)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > (math.abs(lineA - lineC)) && lineB > math.abs(lineC - lineA) {
    return true;
  } else if (lineC < lineB + lineA && lineC > (math.abs(lineB - lineA)) && lineC > math.abs(lineA - lineB){
    return true;
  } else {return false};

}

console.log(triangleCheck(10,14,8))

// Desafio 13
function hydrate("string") {
  let number = string.replace(/\D/g,'');
  let sum =0;
  for (index =0; index < number.lenght; index =+1){
    sum =+
    return sum + "copo(s) de água"
  }
}
//https://stackoverflow.com/questions/30607419/return-only-numbers-from-string

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
