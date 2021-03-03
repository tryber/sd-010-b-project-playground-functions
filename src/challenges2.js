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
  let triangle = false;
  if ((lineA < lineB + lineC) && (lineA > (Math.abs(lineB - lineC))) && (lineA > Math.abs(lineC - lineB))) {
    return triangle = true;
  } else if ((lineB < lineA + lineC) && (lineB > (Math.abs(lineA - lineC))) && (lineB > Math.abs(lineC - lineA))) {
    return  triangle = true;
  } else if ((lineC < lineB + lineA) && (lineC > (Math.abs(lineB - lineA))) && (lineC > Math.abs(lineA - lineB))){
    return triangle = true;
  } else {return triangle = false};

}



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
