// Desafio 10
function techList(array, name) {
  if(array!=''){
  array.sort(); //Source: https://www.w3schools.com/jsref/jsref_sort.asp

  let ar = [];
  let ob = {}

  for(let i=0; i<array.length; i++){
      ob.tech = array[i];
      ob.name = name;
      ar.push(ob); //Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
      ob={};
    }

return (ar);
  }else{
      return ("Vazio!");
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let num = '';
  let s = 1;
  if(array.length!=11){
    return ('Array com tamanho incorreto.');
  }else{
      for(let i = 0; i < array.length; i++){
          for(let i2 = i; i2 < array.length; i2++){
            if(i!=i2){
              if(array[i]==array[i2]){
                s++;
              }

            }
          }
          if(s >= 3 || array[i]>9 || array[i] < 0){
            return ('não é possível gerar um número de telefone com esses valores');
          }
        s = 1;
      }
  }

  num+='(';
  num+=array[0];
  num+=array[1];
  num+=') ';

  for(let i = 2; i < 7; i++){
    num+=array[i];
  }
  num+='-';
  for(let i = 7; i < 11; i++){
    num+=array[i];
  }

  return (num);
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)&&
      lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)){
        return (true);
      }
      else{
        return (false);
      }
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number); //Source: https://codereview.stackexchange.com/a/115887
  let s = 0;
  for(let i = 0; i < numbers.length; i++){
    s += numbers[i];
  }
  if(s == 1){
    return (s + ' copo de água')
  }else{
  return (s + ' copos de água')
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
