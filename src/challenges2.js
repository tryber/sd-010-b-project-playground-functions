// Desafio 10
function techList(teq,name) {
  teq = teq.sort();
  let final = [];
  if (teq.length !== 0) {
    for (techindex = 0; techindex < teq.length; techindex += 1) {
      let array = {
        tech: 'exemplo',
        name: name,
      };
      array.tech = teq[techindex];
      final.push(array);
    }
    return final;
  } else {
      return "Vazio!";
  }

}

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
