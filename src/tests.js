function fizzBuzz(array) {
  resultArray = [];
  stringLoop = ''
  for (let index in array) {
    if (array[index] % 3 == 0) {
      stringLoop = "fizz";
    }
    if (array[index] % 5 == 0) {
      stringLoop = "buzz"
    }
    if (array[index] % 15 == 0) {
      stringLoop = "fizzBuzz"
    }
    if (array[index] % 3 != 0 && array[index] % 5 != 0) {
      stringLoop = "bug!"
    }
    resultArray.push(stringLoop)
  }
  return resultArray;
}
console.log(fizzBuzz([9, 25]));
