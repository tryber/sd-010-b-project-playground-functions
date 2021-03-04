// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort();
  let arrObj = [];
  let myName = name;

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techSort.length; index += 1) {
    arrObj.push(
      {
        tech: techSort[index],
        name: myName,
      },
    );
  }
  return arrObj;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Bruno"))

// Desafio 11
function generatePhoneNumber (phone) {
  let save = [];
  let count = 0
  if(phone.length != 11){
      return "Array com tamanho incorreto."
  }

  for(let index = 0; index < phone.length; index +=1){
      save.push(phone[index])
  }

  for(let index = 0; index < phone.length; index ++){
      let phoneSort = phone.sort(function(a,b){return a-b})
      if(phoneSort[index]< 0 || phoneSort[index]>9){
          return "não é possível gerar um número de telefone com esses valores"
      } else if (phoneSort[index + 1] == phoneSort[index]){
          count += 1
      } else if (count >= 2){
          return "não é possível gerar um número de telefone com esses valores"
      } else if (phoneSort[index] != phoneSort[index+1]){
          count = 0
      }
  }

  function formatNumber(number){ 
      let arr2 = '('
      arr2 += number.slice(0,2) 
      arr2 += ')'
      arr2 += number.slice(2,7)
      arr2 += '-'
      arr2 += number.slice(7,11)
      let tostring = arr2.toString().replace(/,/g, "")
  return tostring
  }

  return formatNumber(save)
}
// console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]))

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
