function triangleCheck(a, b, c) {
const aIn = Math.abs(a);
const bIn = Math.abs(b);
const cIn = Math.abs(c);
  if (aIn > bIn + cIn || bIn > aIn + cIn || cIn > aIn + bIn) {
    return false;
  } else if (aIn < bIn - cIn || bIn < aIn - cIn || cIn < aIn - bIn) {
    return false
  } else {
    return true
  }
}
console.log(triangleCheck(1, 2, 5));