// Desafio 10
function techList(array, name) {
  let techName = {
    tech: array.sort(),
    name: name
  };
  if (array.length == 0) {
    let empty = 'Vazio!';
    return(empty);
  }
  let full = [];
  for (i = 0; i < array.length; i += 1) {
    full.push({ tech: array[i], name });
  }
  return (full);
}
console.log(techList(['JavaScript', 'CSS', 'HTML'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = Boolean;
  let a = lineA;
  let b = lineB;
  let c = lineC;

  if ((a < b+c) && (b < a+c) && (c < a+b)) {
    if ((a > (Math.abs(b-c))) && (b > (Math.abs(a-c))) && (c > (Math.abs(a-b)))) {
    }
      triangle = true;
      return(triangle);
    
  }
  triangle = false;     
  return(triangle);
}
console.log(triangleCheck(10, 14, 8));

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
