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
      arr2 += ') '
      arr2 += number.slice(2,7)
      arr2 += '-'
      arr2 += number.slice(7,11)
      let tostring = arr2.toString().replace(/,/g, "")
  return tostring
  }

  return formatNumber(save)
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB-lineC)){
      return true;
  } else if(lineB < lineA + lineC && lineB > Math.abs(lineA-lineC)){
      return true;
  } else if(lineC < lineA + lineB && lineC > Math.abs(lineA-lineB)){
      return true;
  } else {
      return false
  }
}

// Desafio 13
function hydrate(string) {
  let nome = string;
  let numb = /\d+/g;
  let nam = nome.match(numb);
  let arr = []
    for(let index = 0; index < nam.length; index +=1){
        arr.push(parseInt(nam[index]))
    }
/*  Peguei a refência de manipulação do Reduce por arrow function no: 
  https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers */
    
  let soma = arr.reduce((a,b)=> a + b);
      
      if(soma!= 1){ 
      return `${soma} copos de água`
    } else {
      return `${soma} copo de água`
    }
  }
  // console.log(hydrate("1 cachaça"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
