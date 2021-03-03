// Desafio 10
function techList(tech) {
  let nome = "Lucas";
  let list = tech.sort();
  let saida = [];

  if (list.length > 1) {
  for (i in list){
      saida.push({tech: list[i], name: nome}); 
  }
} else {
  saida = 'Vazio!'
}
  return saida
}

// Desafio 11
function generatePhoneNumber(phone) {
  let resposta = ""

if (phone.length > 11 || phone.length < 11){
    resposta = "Array com tamanho incorreto."
}
else {
    resposta = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`

    for ( i in phone) {
        let count = 0;
          if(phone[i] > 9 || phone[i] < 0) {
          resposta = "não é possível gerar um número de telefone com esses valores"
           }

           for ( j in phone) {
            if(phone[i] == phone[j]){
            count++;
         }
         if(count > 2){
            resposta = "não é possível gerar um número de telefone com esses valores"
         }
      }
    }
}
return resposta;
}

// Desafio 12
function triangleCheck(lineA,lineB, lineC) {
  let resposta = false
let lines = []
lines.push(lineA,lineB, lineC)

if(Math.abs(lines[0] + lines[1]) > lines[2] && Math.abs(lines[0] - lines[1]) < lines[2]){
    if(Math.abs(lines[0] + lines[2]) > lines[1] && Math.abs(lines[0] - lines[2]) < lines[1]){
        if(Math.abs(lines[2] + lines[1]) > lines[0] && Math.abs(lines[2] - lines[1]) < lines[0]){
    resposta = true
} 
    }
}

return resposta
  
}

// Desafio 13
function hydrate(phrase) {
  let numbers = phrase.replace(/[^0-9]/g,'');

let array = numbers.split("");
let sum = 0;
for (i in array) {
  sum += parseInt(array[i]);    
}
return (sum === 1 ? sum+" copo de água" : sum +" copos de água")
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
