let soma = 0
let a = "f1 f2"
a = a.replace(/\D/g, "")
a = a.split('')
for (index =0; index < a.length; index += 1){
    a[index] = parseInt(a[index])
    soma = soma + a[index]
}
console.log(soma)

for (let pedidoindex = 0; pedidoindex < a.length ; pedidoindex += 1){
  if (typeof a[pedidoindex] === 'number'){
    soma = soma + a[pedidoindex];
  }
}
  console.log(soma)