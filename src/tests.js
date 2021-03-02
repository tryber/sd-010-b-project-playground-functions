function concatName(array) {
    firstName = '';
    lastName = '';
    for (let index in array) {
        if (index == 0) {
            lastName = array[index];
        } else if (index == array.length - 1) {
            firstName = array[index]
        }
    }
    let newName = `${firstName}, ${lastName}`;
    return newName;
  }
console.log(concatName(['captain', 'my', 'captain']));
  
