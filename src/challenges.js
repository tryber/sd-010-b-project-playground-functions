// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let phraseSplit = phrase.split(" ");
  return phraseSplit;
}

//(PT-BR): Para executar esse exercício fiz pesquisas e encontrei um material muito bom explicando como utilizar o .split no seguinte site: https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let last = (arrayStrings.length) - 1
  return (`${arrayStrings[last]}, ${arrayStrings[0]}`)
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWins = wins * 3
  let pointsTies = ties * 1
  let allPoints = pointsWins + pointsTies
  return allPoints
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let greather = arrayNumbers[0]
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > greather) {
      greather = arrayNumbers[index]
    }
  }
  let arrayHighestNumber = 0
  for (let index = 0; index < arrayNumbers.length; index+= 1) {
    if (arrayNumbers[index] === greather) {
       arrayHighestNumber = arrayHighestNumber + 1
    }
  }
  return arrayHighestNumber
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1Mouse = mouse - cat1
  let distanceCat2Mouse = mouse - cat2

  if (distanceCat1Mouse < 0) {
    distanceCat1Mouse = - (distanceCat1Mouse)
  }
  if (distanceCat2Mouse < 0) {
    distanceCat2Mouse = - (distanceCat2Mouse)
  }
  if (distanceCat1Mouse < distanceCat2Mouse) {
    return "cat1"
  }
  if (distanceCat2Mouse < distanceCat1Mouse) {
    return "cat2"
  }
  if (distanceCat1Mouse == distanceCat2Mouse) {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  let result = ["i"];
  for (index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 == 0 && arrayNum[index] % 5 == 0) {
      result.push("fizzBuzz")
    }
    if (arrayNum[index] % 3 == 0 && arrayNum[index] % 5 != 0) {
      result.push("fizz")
    }
    if (arrayNum[index] % 5 == 0 && arrayNum[index] % 3 != 0) {
      result.push("buzz")
    }
    if (arrayNum[index] % 3 != 0 && arrayNum[index] % 5 != 0) {
      result.push("bug!")
    }
  }
  result.splice(0,1)
  return result
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = string.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5")
  return newString
}

//(PT-BR) Para este exercício também fiz pesquisas na internet, e encontrei dois materiais que me ajudaram para resolver a questão: https://stackoverflow.com/questions/44324892/how-can-i-replace-multiple-characters-in-a-string; https://www.tutorialrepublic.com/faq/how-to-replace-character-inside-a-string-in-javascript.php#:~:text=Answer%3A%20Use%20the%20JavaScript%20replace,the%20global%20(%20g%20)%20modifier.

function decode(string2) {
  // seu código aqui
  let newString2 = string2.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u")
  return newString2
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
