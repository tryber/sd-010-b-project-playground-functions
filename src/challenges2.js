//dúvidas esclarecidas com o apoio dos plantões de Isaac e Gisele, e dos colegas participantes
//e pesquisas realizadas nos sites: Trybe (tutoriais), Alura, Devmedia, Developer Mozilla, Stackoverflow
// Sitepoint e Ricardo Reis

// Desafio 10
function techList(array, name) {
  let techName = {
    tech: array.sort(),
    name: name
  };
  if (array.length == 0) {
    let empty = 'Vazio!';
    return(empty);
  }
  let full = [];
  for (i = 0; i < array.length; i += 1) {
    full.push({ tech: array[i], name });
  }
  return (full);
}
console.log(techList(['JavaScript', 'CSS', 'HTML'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(number) {
  array = number;
  if (array.length > 11) {
    let phone = 'Array com tamanho incorreto.';
    return(phone); 
  }
  for (i = 0; i < array.length; i += 1){
   if (((parseInt(array[i]))<0) || ((parseInt(array[i]))>9)) {
    let phone = 'não é possível gerar um número de telefone com esses valores';
    return(phone);
   }
  } 
  let count = 1;
 // for (i = 0; i < array.length; i += 1){
   for (l = i+1; l < array.length; l += 1) {
     if (array[i] === array[l]) {
      count += 1;
      }  
   // }
  } 
   if (count >= 3) {
    let phone = 'não é possível gerar um número de telefone com esses valores';
    return(phone); 
  }
    //verificação do formato de saída no código do colega Trybe Carlos Eduardo Margato
    phone= `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  
    return (phone);    
   }

console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = Boolean;
  let a = lineA;
  let b = lineB;
  let c = lineC;

  if ((a < b+c) && (b < a+c) && (c < a+b)) {
    if ((a > (Math.abs(b-c))) && (b > (Math.abs(a-c))) && (c > (Math.abs(a-b)))) {
    }
      triangle = true;
      return(triangle);
    
  }
  triangle = false;     
  return(triangle);
}
console.log(triangleCheck(10, 14, 8));

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
