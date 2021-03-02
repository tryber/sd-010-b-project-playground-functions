// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1==true && bool2==true){
    return (true);
  }
  else{
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(string) {
  let array=[];
    let word='';
    let wCount=0;
  
    for(let i=0; i<string.length; i++){
      if(string[i]!=' '){
        word+=string[i];
      }
      if(string[i]==' ' || i==string.length-1){
        array[wCount]=word;
        word='';
        wCount++;
      }
    }
    return (array);
}

// Desafio 4
function concatName(array) {
  let str='';
  let count=array.length;
  str=array[count-1];
  str+=', ';
  str+=array[0];
  return (str);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3)+ties);  
}

// Desafio 6
function highestCount(array) {
 let maior=array[0];
 let soma=0;

 for(let i=0; i<array.length; i++){
   if(array[i]>maior){
     maior=array[i];
   }
 }

 for(i=0; i<array.length; i++){
   if(maior==array[i]){
      soma++;
   }
 }

 return (soma);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let c1=cat1-mouse;
  let c2=cat2-mouse;
  if(c1<0){
    c1=c1*(-1);
  }
  if(c2<0){
    c2=c2*(-1);
  }

  if(c1<c2){
    return ('cat1');
  }
  if(c2<c1){
    return ('cat2');
  }
  if(c1==c2){
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz() {
  
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
