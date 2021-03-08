// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areatriangulo;
  areatriangulo = (base * height) / 2;
  return areatriangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(matrix) {
  // seu código aqui
  let primeiroNome = matrix[0];
  let ultimoNome = matrix[matrix.length - 1];
  let resultado = ultimoNome + ', ' + primeiroNome;
  
 return resultado;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao;
  pontuacao = (wins * 3 + ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(telefone) {
  // seu código aqui
  let maiorNumero = 0;
  let soma = 0;
 
  for (let index = 0; index < telefone.length; index += 1 ) {
      if (telefone[index] > maiorNumero) {
          maiorNumero = telefone[index];
  }
  }
  for (let index = 0; index < telefone.length; index += 1 ) {
   if (maiorNumero === telefone[index]) {
       soma +=1 ;
   }
  
  
  }
      return soma;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado;
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  
  if (distancia1 > distancia2){
      resultado = 'cat2';
  }
  else if (distancia1 < distancia2) {
      resultado = 'cat1';
  }
  else {
  resultado = 'os gatos trombam e o rato foge';
  }
  
return resultado;
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  
for (let index = 0; index < numeros.length; index+= 1) {
 if ((numeros[index] % 3 === 0) && ((numeros[index] % 5) === 0)){
   numeros[index] = 'fizzBuzz';
 }
else if ((numeros[index] % 3 === 0) && ((numeros[index] % 5) > 0)) {
    numeros[index] = 'fizz';
}
else if ((numeros[index] % 3 > 0) && ((numeros[index] % 5) === 0)) {
    numeros[index] = 'buzz';
}
else {
    numeros[index] = 'bug!'
}
}

return numeros;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
