// Desafio 10
function techList(tech) {
  let nome = "Lucas"
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

if (phone.length > 11){
    resposta = "Array com tamanho incorreto."
}
else {
    resposta = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`
}
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
  
  
return resposta
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
