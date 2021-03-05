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
  let result = '';

  if (phone.length > 11 || phone.length < 11){
      result = "Array com tamanho incorreto.";
  }
  else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
    for (let i = 0; i < phone.length; i += 1) {
      let count = 0;
        if (phone[i] > 9 || phone[i] < 0) {
        result = "não é possível gerar um número de telefone com esses valores";
        }
        for (let j = 0; j < phone.length; j += 1) {
          if (phone[i] == phone[j]) {
          count += 1;
        }
        if (count > 2){
          result = "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false; let line = [];
  line.push(Math.abs(lineA), Math.abs(lineB), Math.abs(lineC));

  if ((line[0] + line[1]) > line[2] && (line[0] - line[1]) < line[2]) {
    if ((line[0] + line[2]) > line[1] && (line[0] - line[2]) < line[1]) {
      if ((line[2] + line[1]) > line[0] && (line[2] - line[1]) < line[0]) {
        result = true;
      }
    }
  }
  return result;
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
