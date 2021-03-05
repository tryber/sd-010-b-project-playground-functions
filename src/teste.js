// let mouse = 0;
// let cat1 = 3;
// let cat2 = 2;

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = ''; let distanciaCat1 = mouse - cat1 * (-1);
  let distanciaCat2 = (mouse - cat2) * (-1);
  if (distanciaCat1 < distanciaCat2) {
    result = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}






















