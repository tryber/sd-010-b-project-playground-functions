// Desafio 10
function techList(tech, name) {
  let list = tech.sort();
  let result = [];
  if (list.length > 1) {
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name: name });
    }
  } else result = 'Vazio!';
  return result;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let count = 0;
  if (phone.length != 11) result = "Array com tamanho incorreto.";
  else result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;

  for (i in phone) {
    if (phone[i] < 0 || phone[i] > 9) result = 'não é possível gerar um número de telefone com esses valores1';
    for (j in phone) {
      count = 0;
      if (phone[j] == phone[i]) count += 1;
    }
  }

  if (count >= 3) result = 'não é possível gerar um número de telefone com esses valores2';
  return result;
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
