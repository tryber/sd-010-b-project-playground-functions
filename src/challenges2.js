// Desafio 10
function techList(arrayList, name) {
  let firstElementAux = '';
  if(arrayList === []){
    return 'Vazio!';
  } else {
    arrayList.sort();
    let tamanhoArray = arrayList.length;
    for(let index = 0; index < tamanhoArray; tamanhoArray -= 1){
      firstElementAux = arrayList[index];
      arrayList.shift()
      arrayList.push(
        {
          tech: firstElementAux,
          name: name,
        })
    }
    return arrayList;
  }
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
