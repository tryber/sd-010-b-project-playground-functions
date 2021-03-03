// Desafio 10
function techList(parameter1, parameter2) {
  let newtech = parameter1 + parameter2

  newtech.tech = parameter1[index]
  newtech.name = parameter2

  return parameter1[index]
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;
  if ((lineA < lineB + lineC) && (lineA > (Math.abs(lineB - lineC))) && (lineA > Math.abs(lineC - lineB))) {
    return triangle = true;
  } else if ((lineB < lineA + lineC) && (lineB > (Math.abs(lineA - lineC))) && (lineB > Math.abs(lineC - lineA))) {
    return  triangle = true;
  } else if ((lineC < lineB + lineA) && (lineC > (Math.abs(lineB - lineA))) && (lineC > Math.abs(lineA - lineB))){
    return triangle = true;
  } else {return triangle = false};

}

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g,'');
  let SeparatedNumber = numbers.split("");
  let number = SeparatedNumber.map(i=>Number(i));
  let sum = 0;
  for (let index =0; index < number.length; index++){
    sum += number[index]
  }
  if (sum === 1){
    return "1 copo de água"
  }
  return sum + " " + "copos de água";
  }
  console.log(hydrate("2 copo de cerveja e 1 tequila"))
//https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
//https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
//"(/[^0-9]/g,'')" e "(i=>Number(i))" foram propriedades que eu retirei dos links disponibilizados acima. Eu não tenho familiaridade com ambos, mas consegui encaixá-los no meu projeto. Caso necessário, posso retirá-los.

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
