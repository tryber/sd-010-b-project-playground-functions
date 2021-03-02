function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return (winsPoints + tiesPoints);
}
console.log(footballPoints(0,0))
