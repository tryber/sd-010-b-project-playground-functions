function highestCount(array) {
    let biggestNumber = 0;
    let bigNumberReps = 0;
    for (let index in array) {
        if (index == 0) {
            biggestNumber = array[index]
        } else if (biggestNumber < array[index]) {
            biggestNumber = array[index]
        }
    }
    for (let index in array) {
        if (array[index] == biggestNumber) {
            bigNumberReps += 1
        }
    }
    return bigNumberReps;
  }
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
  