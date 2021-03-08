let resultado = 0;
let maiorNumero = 0;
let soma = 0;
let telefone = [3,1,2,1,5,7,0,3,5,0];
for (let index = 0; index < telefone.length; index += 1 ) {
    if (telefone[index] > maiorNumero) {
        maiorNumero = telefone[index];
}

for (let index = 0; index < telefone.length; index += 1 ) {
 if (maiorNumero === telefone[index]) {
     soma +=1 ;
 }


}

    console.log(maiorNumero);
    console.log("resultado " + resultado);
}
