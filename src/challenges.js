// Desafio 1
function compareTrue(batman, robin) {
  return batman && robin;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

function concatName(names) {
  let firstElement = names.shift();
  let space = " "
  let lastElement = names.pop();
  let newArr = [lastElement, [space,firstElement].join("")];
  return newArr.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let biggest = 0;
  let count = 0;

  for ( key in array) {
        if(array[key] > biggest) {
        biggest = array[key];
         }
  }

  for ( key in array) {
      if(array[key] == biggest){
      count++;
   }
}
return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
if(Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))){
  return 'cat2'
}
else if((mouse - cat1) === (mouse - cat2)){
  return "os gatos trombam e o rato foge"
}
else{
  return 'cat1'
} 
}


// Desafio 8
let fizbuzzArray =[]
function fizzBuzz(arr) {
  for(num in arr){
    if(arr[num] % 5 == 0 && arr[num] % 3 == 0) {
      fizbuzzArray.push("fizzbuzz")
    } else if(arr[num] % 5 == 0) {
      fizbuzzArray.push("buzz")
    } else if(arr[num] % 3 == 0) {
      fizbuzzArray.push("fizz")
    } else {
      fizbuzzArray.push("bug")
    }
  }
  return fizbuzzArray
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
