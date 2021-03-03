// Desafio 1
function  compareTrue ( boolean1 ,  boolean2 )  {
  deixe  bolfalse  =  false ;
  if  ( boolean1  ===  true  &&  boolean2  ===  true )  {
    bolfalse  =  verdadeiro ;
  }
  retornar  bolfalse ;
}
console . log ( compareTrue ( true ,  false ) ) ;

// Desafio 2
function  calcArea ( base ,  height )  {
  retorno  ( base * altura ) / 2 ;
}
// Desafio 3
function  splitSentence ( frase )  {
  deixe  Palavras  =  frase . dividir ( '' ) ;
  return  palavras ;
}
// Desafio 4
function  concatName ( array )  {
  const  concatenado  =  ` $ { array [ ( array . comprimento  -  1 ) ] } , $ { array [ 0 ] } ` ;

  retorno  concatenado ;
}
// Desafio 5
função  footballPoints ( vitórias ,  empates )  {
  const  totalpoints  =  ( vitórias * 3 )  +  empates ;

  retornar  totalpoints ;
}
// Desafio 6
function  higherCount ( array )  {
  deixe  max  =  array [ 0 ] ;
  deixe  nVezes  =  0 ;
  // Verificar qual maior número
  para  ( deixe a  chave  na  matriz )  {
    if  ( array [ chave  +  1 ] > = max )  {
      max  =  matriz [ tecla  +  1 ] ;
    }
  }

  para  ( deixe a  chave  no  array )  if  ( array [ chave ]  ===  max )  nVezes  + =  1 ;
}

// Desafio 7
function  catAndMouse ( mouse ,  cat1 ,  cat2 )  {
  deixe  distCat1  =  Math . abs ( cat1  -  camundongo ) ;
  deixe  distCat2  =  Math . abs ( cat2  -  camundongo ) ;
  deixe  alcancaPrimeiro  =  '' ;

  if  ( distCat1  <  distCat2 )  {
    alcancaPrimeiro  =  'cat1' ;
  }
  if  ( distCat2  <  distCat1 )  {
    alcancaPrimeiro  =  'cat2' ;
  }
  if  ( distCat1  ===  distCat2 )  {
    alcancaPrimeiro  =  'os gatos trombam e o rato foge' ;
  }
  voltar  alcancaPrimeiro ;
}

}

// Desafio 8
function  fizzBuzz ( )  {
  // seu código aqui
}

// Desafio 9
function  encode ( )  {
  // seu código aqui
}
function  decode ( )  {
  // seu código aqui
}

módulo . exportações  =  {
  calcArea ,
  catAndMouse ,
  compareTrue ,
  concatName ,
  decodificar ,
  codificar ,
  fizzBuzz ,
  footballPoints ,
  maximumCount ,
  splitSentence ,
} ;