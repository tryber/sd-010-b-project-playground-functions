function fizzBuzz(myArray) {
  let newArray = [' '];
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 === 0 && myArray[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (myArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (myArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

console.log(fizzBuzz([2,15,7,9,45]));

