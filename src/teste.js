function encode(palavra) {
  for (let index = 0; index < palavra.length; index += 1) {
    palavra = palavra.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);
  }
  return palavra;
}

function decode(palavra) {
  for (let index = 0; index < palavra.length; index += 1) {
    palavra = palavra.replace(1, 'a').replace(2, 'e').replace(3, 'i').replace(4, 'o').replace(5, 'u');
  }
  return palavra;
}

