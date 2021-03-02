function techList(array,name) {
  let futureLearning = [];
for (index in array.sort()) {
  let addFutureLearning = {}
  addFutureLearning.tech = array[index];
  addFutureLearning.name = name;
  futureLearning.push(addFutureLearning);
}

  if (array.length === 0){
    return "Vazio!";
  } else {
    return futureLearning;
  } 
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"))