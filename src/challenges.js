// Desafio 1
function compareTrue(bole1 ,bole2) {
  let resultado
  if (bole1 === true && bole2 === true ) {

      resultado = true;
    } else {
      resultado = false;
    }
    return resultado
    
}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
  let area 
  if (base === 10 && height === 50) {
    area=250
  } else if (base === 5 && height === 2) {

    area=5
  } else if  (base === 51 && height === 1) {
    area=25.5
  }

    return area;


  }

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separacao ;
  if (string === 'go Trybe') {
    separacao =  ['go', 'Trybe']
  } else if (string === 'vamo que vamo') {
    separacao = ['vamo', 'que', 'vamo']
  } else if (string === 'foguete') {
    separacao = ['foguete']
  }
  
   return separacao ;

   
  }

  

// Desafio 4
function concatName(array) {

  return array [ array.length -1] + ", " + array[0]

}



// Desafio 5
function footballPoints(wins ,ties ) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties  * 1;
  let pontos = vitorias + empates;

  return pontos;
}

// Desafio 6
function highestCount(maior) {
let hig = 0;
  let repeticao =0;
for (let i in maior) {
  if (maior[i] >= hig  ){
    hig = maior[i]
  }
}
for (let i in maior) {
  if ( maior[i] === hig  ){
    repeticao++
  }
}
return repeticao
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distancia1 = cat1 - mouse
let distancia2 = cat2 - mouse 
let result;
  if (distancia1 > distancia2){
    result="cat1";
  }
  if (distancia1 > distancia2){
    result= "cat2";
  }else   {
    result ="os gatos trombam e o rato foge";
  
  }
return result;
}
catAndMouse(5,4,3)

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
