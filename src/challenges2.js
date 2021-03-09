// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  let out = [];
  tech.sort();
  for (let tc in tech) {
    let out_obj = {};
    out_obj.tech = tech[tc];
    out_obj.name = name;
    out.push(out_obj);
  }
  return out;
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
