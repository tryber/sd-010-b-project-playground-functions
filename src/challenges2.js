// Requisito 10 - Receber um array de tecnologias e nomes para criar um novo array com objetos possuindo campos tech e name.
//    - Ordenar novo array a partir do campo tech
//    - Se array vazio retornar 'Vazio!'
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array = array.sort();
  let list = [];
  for (let tech = 0; tech < array.length; tech += 1) {
    list.push({ tech: array[tech], name });
  }
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Gustavo')); // -> [{ tech: 'CSS', name: 'Gustavo' },{ tech: 'HTML', name: 'Gustavo' },{ tech: 'JavaScript', name: 'Gustavo' },{ tech: 'Jest', name: Gustavo' },{ tech: 'React', name: 'Gustavo' }]
console.log(techList([], 'Gustavo')); // -> 'Vazio!'

// Requisitos Bônus
// Requisito 11 - Gerar número de telefone a partir de array respeitando parênteses, traços e espaços.
function generatePhoneNumber(numbers) {
  if (numbers.length === 11) {
    let phone = '(';
    for (let num = 0; num < numbers.length; num += 1) {
      let counter = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] === numbers[num]) counter += 1;
      }
      if (numbers[num] < 0 || numbers[num] > 9 || counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (num === 2) phone += ') ';
      else if (num === 7) phone += '-';
      phone += numbers[num];
    }
    return phone;
  }
  return 'Array com tamanho incorreto.';
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 5])); // -> 'Array com tamanho incorreto.'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1])); // -> 'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10])); // -> 'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0])); // -> 'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // -> (12) 34567-8901

// Requisito 12 - Verificar se as linhas formam um triângulo
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}
console.log(triangleCheck(10, 14, 8)); // -> trues

// Requisito 13 - Recebe uma string e retorne a sugestão de quantos copos de água você deve beber
function hydrate(string) {
  let reg = /\d+/g;
  let cups = string.match(reg);
  let sum = 0;
  for (let cup = 0; cup < cups.length; cup += 1) {
    sum += parseInt(cups[cup], 10);
  }
  return `${sum} copos de água`;
}
console.log(hydrate('1 cerveja')); // -> '1 copo de água'
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // -> '7 copos de água'
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // -> '7 copos de água'

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
