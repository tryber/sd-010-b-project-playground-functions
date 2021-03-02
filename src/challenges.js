// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true
} else {
    return false
}
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2
}

// Desafio 3
function splitSentence(string) {
  let separador = string.split(" ");
    return separador;
}

// Desafio 4
function concatName(name) {
  return name[name.length-1] + ", " + name[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = 3*wins + ties;
    return pontosTotais
}

// Desafio 6
function highestCount(arei) {
  let auxiliar = arei[0];
    let nVezesMaiorNumero = [];
    for(i=0; i<arei.length; i++){
        if (arei[i]>auxiliar){
            auxiliar=arei[i];
        }

    }
    for (j=0;j<arei.length;j++){
        if(arei[j]==auxiliar){
            nVezesMaiorNumero.push(arei[j])
        }
    }
    return nVezesMaiorNumero.length
}

// Desafio 7
function catAndMouse (mouse, cat1, cat2){
    
/** Consultei o repositório do ArlessonMoura para conhecer a função "math.abs()", que me dá o módulo do número dentro do ().
obtive a função "math.abs" no endereço: https://github.com/tryber/sd-09-project-playground-functions/pull/134/files
*/
      
      
      let moduloCat1 = Math.abs(mouse - cat1);
      let moduloCat2 = Math.abs(mouse - cat2);
      
      if(moduloCat1-moduloCat2==0){
          return "os gatos trombam e o rato foge"
      } else if (moduloCat1<moduloCat2){
          return "Cat2"
      } else {
          return "Cat1"
      }
  }

// Desafio 8
function fizzBuzz (array){
  let areiAux=[];

  for(i=0; i<array.length;i++){
      if(array[i]%3==0 && array[i]%5==0){
          areiAux.push("fizzBuzz");
      } else if(array[i]%3==0 && array[i]%5!==0){
          areiAux.push("fizz")
      } else if(array[i]%3!==0 && array[i]%5==0){
          areiAux.push("buzz")
      } else {
          areiAux.push("bug!")
      }
  } return areiAux
}

// Desafio 9
function encode(stringstron){
    let stringEncodada = "";
    for(i=0;i<stringstron.length;i++){
        if(stringstron[i] == "a"){
            stringEncodada += "1";
        } else if(stringstron[i] == "e"){
            stringEncodada += "2";
        } else if(stringstron[i] == "i"){
            stringEncodada += "3";
        } else if(stringstron[i] == "o"){
            stringEncodada += "4";
        } else if(stringstron[i] == "u"){
            stringEncodada += "5";
        } else {
            stringEncodada += stringstron[i]
        }
    }return stringEncodada
}

function decode(stringstron){
  let stringEncodada = "";
  for(i=0;i<stringstron.length;i++){
      if(stringstron[i] == "1"){
          stringEncodada += "a";
      } else if(stringstron[i] == "2"){
          stringEncodada += "e";
      } else if(stringstron[i] == "3"){
          stringEncodada += "i";
      } else if(stringstron[i] == "4"){
          stringEncodada += "o";
      } else if(stringstron[i] == "5"){
          stringEncodada += "u";
      } else {
          stringEncodada += stringstron[i]
      }
  }return stringEncodada
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
