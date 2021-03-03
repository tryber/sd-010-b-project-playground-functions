// Desafio 1
function compareTrue(valor1, valor2) {
  let isTrue = false;
  if ((valor1 && valor2)) {
    isTrue = true;
  }
  return isTrue;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let split = [];
  let temp = [];
  for (let cont = 0; cont < frase.length; cont += 1) {
    if (' ' === frase[cont]) {
      split.push(temp);
      temp = [];
      cont += 1;
    }
    temp += frase[cont];
  }
  split.push(temp);
  return split;
}

// Desafio 4
function concatName(nome) {
  return (nome[nome.length - 1] + ', ' + nome[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0;
  let contador = 0;
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] > maior) {
      maior = numeros[cont];
    }
  }
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) !== Math.abs(cat2 - mouse)) {
    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      return 'cat1';
    } 
    return 'cat2';
    }
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(numeros) {
  let resposta = [];
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if ((numeros[cont] % 3) === 0 && (numeros[cont] % 5) === 0) {
      resposta.push('fizzbuzz');
    } else if ((numeros[cont] % 3) === 0) {
      resposta.push('fizz');
    } else if ((numeros[cont] % 5) === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }
  }
  return(resposta)
}

// Desafio 9
function encode(string) {
  let codigo = ''
  for (let cont = 0; cont < string.length; cont += 1) {
      switch (string[cont]){
        case 'a':
          codigo+=1
          break
        case 'e':
          codigo+=2
          break
        case 'i':
          codigo+=3
          break
        case 'o':
          codigo+=4
          break
        case 'u':
          codigo+=5
          break
        default:
         codigo+= string[cont]
      }
  }
  return codigo
}
function decode(string) {
    let codigo = ''
    for (let cont = 0; cont < string.length; cont += 1) {
        switch (string[cont]){
          case 1:
            codigo += 'a';
            break;
          case 2:
            codigo += 'e';
            break;
          case 3:
            codigo += 'i';
            break;
          case 4:
            codigo += 'o';
            break;
          case 5:
            codigo += 'u';
            break;
          default:
           codigo+= string[cont];
           break;
        }
    }
    return codigo;
  }
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
