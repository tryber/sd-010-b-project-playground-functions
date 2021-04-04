function concatName(arrayNames) {
  // seu código aqui
  let firstName = arrayNames[0];
  let lastName = arrayNames[arrayNames.length - 1];
  let fullName = lastName + ', ' + firstName;
  return fullName;
}


concatName(['huggo','parcelly']);