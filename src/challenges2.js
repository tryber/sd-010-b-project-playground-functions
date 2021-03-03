// Desafio 10


function techList(tec, name) {
  // let array =["React", "Jest", "HTML", "CSS", "JavaScript"]
  // let name ="Lucas"
  let array = tec.sort()
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let bloco = {
      tech: array[index],
      name: name
  }
    newArray.push(bloco);
}

if (newArray.length ==0){
  return 'Vazio!';
} else {
  return newArray;
}

  }

// Desafio 11
function generatePhoneNumber() {

  let numbersphone = [1, 2, 8, 2, 3, 3, 7, 8, 9, 0, 1];
  let bloco = {}
  if (numbersphone.length == 11) {
    for (let index=0; index < 11; index += 1) {
      if (numbersphone[index] < 0 || numbersphone[index] >9) {
        console.log("Os numeros precisam ser entre 0 e 9")
        break;
        }

      let quantidade = 0
      for (let j = 0; j< numbersphone.length; j += 1) {
        if (numbersphone[index] == numbersphone[j]) {
          quantidade += 1;
      }
      }
      bloco[numbersphone[index]] = quantidade

  } for (keys in bloco){
    if(bloco[keys] > 3){
      console.log('"não é possível gerar um número de telefone com esses valores"')
      break;
    }
  }

  } else if (numbersphone.length == 11){
    console.log(`(${numbersphone[0]}${numbersphone[1]}) ${numbersphone[2]}${numbersphone[3]}${numbersphone[4]}${numbersphone[5]}${numbersphone[6]}-${numbersphone[7]}${numbersphone[8]}${numbersphone[9]}${numbersphone[10]}`)
  } else {
    console.log('Array com tamanho incorreto.')
  }
}
// Desafio 12

function triangleCheck(lineA, lineB, lineC){
  let sumAC = (lineA + lineC);
  let sumAB = (lineA + lineB);
  let sumBC = (lineB + lineC);
  let difAC = Math.abs(lineA - lineC);
  let difAB = Math.abs(lineA- lineB);
  let difBC = Math.abs(lineB- lineC);
  if((sumAB> lineC) && (sumBC > lineA) && (sumAC > lineB) && (difAC<lineB) && (difAB<lineC) && (difBC<lineA)){
    return true
  }else{
    return false
  }
}

// Desafio 13
function hydrate() {
  let str = "1 cachaça, 5 cervejas e 1 copo de vinho"
  let array = str.split(" ")
  count = 0
console.log(array)
  for(let index = 0; index < array.length; index += 1){

      count += array[index]
    }
  } console.log(count)



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

let numbersphone = [1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 1]
console.log(numbersphone.filter(numbersphone =! 1))
