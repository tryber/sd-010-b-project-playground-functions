// Desafio 10
function techList(techs, nameUser) {
  techs.sort();
  let messege = null;
  let arrayReturn = [];
  if (techs.length === 0) {
    messege = 'Vazio!';
  } else {
    for (let index = 0; index < techs.length; index += 1) {
      arrayReturn.push({ tech: techs[index], name: nameUser });
    }

    messege = arrayReturn;
  }
  return messege;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));

module.exports = techList;