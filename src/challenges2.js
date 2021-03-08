// Desafio 10
function techList(tecnologia, pessoa) {
    let objeto = []
    tecnologia2 = tecnologia.sort();
    if (tecnologia2.length == 0) {
      return 'Vazio!';
    }
    for (let key in tecnologia2) {
      objeto.push({ tech: tecnologia2[key], name: pessoa });
    }
    return objeto;
  }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
  exercico 9
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
