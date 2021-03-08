// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let compara;
  if (param1 === true && param2 === true) {
    compara = true;
  } else {
    compara = false;
  }
  return compara;
}

// Desafio 2
function calcArea(height, base) {
  // seu código aqui
  return (height * base) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let split = str.split(' ');
  return split;
}

// Desafio 4
function concatName(fullName) {
  // seu código aqui
  let firstLastName = fullName[fullName.length - 1] + ', ' + fullName[0];
  return firstLastName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let check = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (check < array[index]) {
      check = array[index];
    }
  }
  let amount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === check) {
      amount += 1;
    }
  }
  return amount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui /* Fonte da função Math.abs: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs> */                
  let posMouse1 = Math.abs(mouse - cat1);
  let posMouse2 = Math.abs(mouse - cat2);

  if (posMouse1 < posMouse2) {
    return "cat1";
  } else if (posMouse2 < posMouse1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(fizzBuzz) {
  // seu código aqui
  let array = [];
  for (let i in fizzBuzz) {
    if (fizzBuzz[i] % 3 == 0 && fizzBuzz[i] == 0) {
      array.push("fizzBuzz");
    } else if (fizzBuzz[i] % 3 == 0) {
      array.push("fizz");
    } else if (fizzBuzz[i] % 5 == 0) {
      array.push("buzz");
    } else {
      array.push("bug!")
    }
  }
  return array;
}

// Desafio 9
function encode(lowercase) {
  // seu código aqui
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  
  let arr = str.split('');
  
  for (let i = 0; i < arr.length; i += 1) {
    for (let key in code) {
      if (arr[i] === code[key]) {
        arr[i] = key;
      }
    }
  }
  
  return arr.join('');
}

function decode(str) {
  // seu código aqui
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  
  let arr = str.split('');
  
  for (let i = 0; i < arr.length; i += 1) {
    for (let key in code) {
      if (arr[i] === key) {
        arr[i] = code[key];
      }
    }
  }
  
  return arr.join('');
}

console.log(decode(""))

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