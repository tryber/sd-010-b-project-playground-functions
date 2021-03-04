function techList(array, name) {
  if (array.length == 0){
    return 'Vazio!';
  }

  let tecnologias = {
    tech: 'NomeTech',
    name: name
  };

  let resultado = [];
  array.sort();
  for (let i = 0; i < array.length; i++){
    resultado.push({'tech':array[i], 'name':name});
  }

  return resultado;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));