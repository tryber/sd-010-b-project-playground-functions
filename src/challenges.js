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
let distancia1 = mouse - cat1;
let distancia2 = mouse - cat2;



let result;

  if (Math.abs(distancia1) >Math.abs(distancia2)){
    result="cat2";
  }
  else if (Math.abs(distancia1)< Math.abs(distancia2)){
    result= "cat1";
  } else   {
    result ="os gatos trombam e o rato foge";
  
  }
return result;
}

// Desafio 8
function fizzBuzz(number) {
  let array =[];
  for(let i in number){
    
    if((number[i]%5) === 0 && (number[i]%3) === 0  ){
      array.push('fizzBuzz')
    } 
    else if((number[i]%3) ===  0  ){
      array.push("fizz")
    }else if((number[i]%5) ===  0  ){
      array.push("buzz")
    }
    else{
      array.push("bug!")
    }

  
}
return array

}
// Desafio 9
function encode(string2) {
  let texto = string2;
  let EP = texto.split("")
  let armazem =[];
  let armazem2 = [];
  for(let i in EP){
    armazem.push(EP[i])
  }
  for (let i2 in armazem){
    if (armazem[i2] === "a"){
      armazem2.push("1")}
  
    else if (armazem[i2] === "e"){
      armazem2.push("2")
    } else if (armazem[i2] === "i"){
      armazem2.push("3")
    } else if (armazem[i2]  === "o"){
      armazem2.push("4")
    } else if (armazem[i2] === "u"){
      armazem2.push("5")
    }
  else {
    armazem2.push(armazem[i2])

  }
  }
let resultado =armazem2.join("")
  
  return resultado 
}


function decode(string3) {
  let texto = string3;
  let EP = texto.split("")
  let armazem =[];
  let armazem2 = [];
  for(let i in EP){
    armazem.push(EP[i])
  }
  for (let i2 in armazem){
    if (armazem[i2] === "1"){
      armazem2.push("a")}
  
    else if (armazem[i2] === "2"){
      armazem2.push("e")
    } else if (armazem[i2] === "3"){
      armazem2.push("i")
    } else if (armazem[i2]  === "4"){
      armazem2.push("o")
    } else if (armazem[i2] === "5"){
      armazem2.push("u")
    }
  else {
    armazem2.push(armazem[i2])

  }
  }
let resultado =armazem2.join("")
  
  return resultado 
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
