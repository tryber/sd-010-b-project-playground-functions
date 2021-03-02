function encode(string) {
  newString = '';
  string = string.split('');
  for (let index in string) {
    if (string[index] == 'a') {
      string[index] = '1';
    } else if (string[index] == 'e') {
      string[index] = '2';
    } else if (string[index] == 'i') {
      string[index] = '3';
    } else if (string[index] == 'o') {
      string[index] = '4';
    } else if (string[index] == 'u') {
      string[index] = '5';
    }
    newString += string[index];
  }
  return newString;
}

function decode(string) {
  newString = '';
  string = string.split('');
  for (let index in string) {
    if (string[index] == '1') {
      string[index] = 'a';
    } else if (string[index] == '2') {
      string[index] = 'e';
    } else if (string[index] == '3') {
      string[index] = 'i';
    } else if (string[index] == '4') {
      string[index] = 'o';
    } else if (string[index] == '5') {
      string[index] = 'u';
    }
    newString += string[index];
  }
  return newString;
}

console.log(encode("hi there aeiou idhawhdoadhojfoeof!"));
console.log(decode(encode("hi there aeiou idhawhdoadhojfoeof!")))