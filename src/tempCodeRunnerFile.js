function hydrate(drinks) {
  // seu código aqui
  let num = drinks.match(/\d+/g);
  let sum = 0;
  let resp = ''
  for (n in num) {
    sum += parseInt(num[n]);
  }
  if (sum === 1) {
    resp = sum + ' copo de água';
  } else {
    resp = sum + ' copos de água';
  }
  return resp;
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));