const { calcArea, catAndMouse, compareTrue, concatName, decode, encode, fizzBuzz, footballPoints, highestCount, splitSentence } = require('../src/challenges');

describe('Testes para a função compareTrue', () => {
  test('Compara dois valores true e retorna true', () => expect(compareTrue(true, true)).toBe(true));
  test('Compara dois valores false e retorna false', () => expect(compareTrue(false, false)).toBe(false));
  test('Compara um dos valores false e retorna false', () => expect(compareTrue(false, true)).toBe(false));
});

describe('Testes para a função calcArea', () => {
  test('Verifica se os parametros enviados retornam a area correta', () => expect(calcArea(3, 9)).toBe(13.5));
  test('Verifica se a função aceita numeros negativos', () => expect(() => calcArea(-2, -0.001)).toThrow());
});

describe('Testes para a função splitSentence', () => {
  test('Verifica se a função retorna o array esperado', () => {
    const frase = 'testando alo alo';
    const esperado = ['testando', 'alo', 'alo'];
    expect(splitSentence(frase)).toEqual(esperado);
  });
  test('Verifica se a função retorna o array esperado', () => {
    const frase = 'Testando ... pontuações ,,,, ....;.;.""121';
    const esperado = ['Testando', '...', 'pontuações', ',,,,', '....;.;.""121'];
    expect(splitSentence(frase)).toEqual(esperado);
  })
});

describe('Testa a função concatName', () => {
  test('Espera que a função retorne a string correta', () => expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toEqual('Paolillo, Lucas'));
  test('Espera que a função retorne a string correta', () => expect(concatName(['foguete', 'não', 'tem', 'ré'])).toEqual('ré, foguete'));
  test('Espera que a função retorne a string correta', () => expect(concatName(['captain', 'my', 'captain'])).toEqual('captain, captain'));
}); 

describe('Testa a função footbalPoints', () => {
  test('Espera que a função retorne o valor correto', () => expect(footballPoints(14, 8)).toBe(50));
  test('Espera que a função retorne o valor correto', () => expect(footballPoints(1, 2)).toBe(5));
  test('Espera que a função retorne o valor correto', () => expect(footballPoints(0, 0)).toBe(0));
});

describe('Testa a função highestCount', () => {
  test('Espera que a função retorne o valor correto', () => expect(highestCount([9, 1, 2, 3, 9, 5, 7])).toBe(2));
  test('Espera que a função retorne o valor correto', () => expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1));
  test('Espera que a função retorne o valor correto', () => expect(highestCount([0, 0, 0])).toBe(3));
});

describe('Testa a função catAndMouse', () => {
  it('deveria retornar o esperado', () => expect(catAndMouse(0, 3, 2)).toBe('cat2'));
  it('deveria retornar o esperado', () => expect(catAndMouse(0, 12, 6)).toBe('cat2'));
  it('deveria retornar o esperado', () => expect(catAndMouse(0, 2, 2)).toBe('os gatos trombam e o rato foge'));
});

describe('fizzBuzz function', () => {
  it('Should return the expected array', () => expect(fizzBuzz([2, 15, 7, 9, 45])).toStrictEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']));
  it('Should return the expected array', () => expect(fizzBuzz([7, 9])).toStrictEqual(['bug!', 'fizz']));
  it('Should return the expected array', () => expect(fizzBuzz([9, 25])).toStrictEqual(['fizz', 'buzz']));
})

describe('decode function', () => {
  it('Should return "h3 th2r2!"', () => expect(encode('hi there!')).toBe('h3 th2r2!'));
})

describe('decode function', () => {
  it('Should return "hi there!"', () => expect(decode('h3 th2r2!')).toBe('hi there!'));
})