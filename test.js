function hydrate(string) {
  let cC = '';  //cC = checkCharacter
  let storeNumbers= 0;
  for (let i = 0; i < string.length; i += 1) {
    cC = (string[i]);

    if (cC == 1) {
      storeNumbers += 1;
    } else if (cC ==2) {
      storeNumbers += 2
    } else if (cC == 3) {
      storeNumbers += 3
    } else if (cC == 4) {
      storeNumbers += 4
    } else if (cC == 5) {
      storeNumbers += 5
    }
  }
  return (`${storeNumbers} copos de água`)

}

hydrate("1 2 4");