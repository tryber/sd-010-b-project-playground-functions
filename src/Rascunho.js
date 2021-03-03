let maior
let meio
let menor
if (lineA > lineB && lineC){
  maior =lineA
  if (lineB > lineC){
    meio = lineB
    menor = lineC
  } 
  meio = lineC
  menor = lineB
} else if (lineB > lineA && lineC) {
  maior =lineB
  if (lineA > lineC){
    meio = lineA
    menor = lineC
  } 
  meio = lineC
  menor = lineA
} else if (lineC > lineA && lineB){
  maior =lineC
  if (lineB > lineA){
    meio = lineB
    menor = lineA
  } 
  meio = lineA
  menor = lineB
}
if (maior > meio + menor || meio < maior - menor)