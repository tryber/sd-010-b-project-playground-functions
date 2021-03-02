// Desafio 10
function techList(arrayTech,name) {
  // meu código aqui
  let sortArrayTech = arrayTech.sort();
  if(arrayTech.length < 1){
    return "Vazio!"
  }else{
    let techLists = [];
    for (let i = 0; i < arrayTech.length; i++) {
      techLists.push( { tech: arrayTech[i], name: name }
      )
    } 
    return techLists;
  }
}

console.log(generatePhoneNumber([]));


// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // meu código aqui
  if(verifyLength(arrayNumber)){
    return "Array com tamanho incorreto."
  }else if(verifycaOccurr(arrayNumber)||verifyNum(arrayNumber)){
    return "não é possível gerar um número de telefone com esses valores";
  }else{
    let numJoin = arrayNumber.join('')
    return `(${numJoin.slice(0,2)}) ${numJoin.slice(2,7)}-${numJoin.slice(7)}`;
  }
}

function verifycaOccurr(toVerify){
  let quantyOccurre = 0;
  let maxQuantyOccurre = 0;
  for (let numVerificado = 0; numVerificado < toVerify.length; numVerificado++) {
    for (let numVerificando = 0; numVerificando < toVerify.length; numVerificando++){
      if(toVerify[numVerificado] == toVerify[numVerificando]){
        quantyOccurre++;
      }
    }
    if(maxQuantyOccurre < quantyOccurre){
      maxQuantyOccurre = quantyOccurre;
    }
    quantyOccurre =0
  }
  if (maxQuantyOccurre > 2){
    return true;
  }else{
    return false
  }
}

function verifyNum(toVerify){
  let existsZero = false; 
  for (let i = 0; i < toVerify.length; i++) {
    if(toVerify[i] < 0 || toVerify[i] > 9 ){
      existsZero = true;
      break;
    }    
  }
  return existsZero;
}

function verifyLength(toVerify){
  let sizeNum = toVerify.length;
  let lengthWrong = false; 
  if( sizeNum.length > 11 || toVerify.length < 11 || toVerify.length === 0){
    lengthWrong = true;
  }      
  return lengthWrong;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // meu código aqui
  if( (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))){
    return true;
  }else{
    return false;
  }
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
