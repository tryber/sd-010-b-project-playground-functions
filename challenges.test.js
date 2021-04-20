const { encode, decode } = require('./src/challenges');

describe('1.1 - Ferificar se as funções encode() e decode() são do tipo function', () => {
  it('A função encode é do tipo function', () => {
    expect(typeof encode).toBe('function');
  });
  it('A função decode é do tipo function', () => {
    expect(typeof decode).toBe('function');
  });
});

test(`1.2 - Para a função encode teste se as vogais a, e, i, o, u 
são convertidas em 1, 2, 3, 4 e 5, respectivamente;`, () => {
  expect(encode('aeiou')).toBe('12345');
});

test(`1.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5
são convertido nas vogais a, e, i, o, u , respectivamente;`, () => {
  expect(decode('12345')).toBe('aeiou');
});

describe(`1.4 - Teste se as demais letras/números não
são convertidos para cada caso;`, () => {
  it('Verificando se as demais letras não são convertidas em outros numeros:', () => {
    expect(encode('bcdfghjklmnprstvwxyz')).toEqual('bcdfghjklmnprstvwxyz');
  });
  it('Verificando se as demais letras não são convertidas em outros numeros:', () => {
    expect(decode('bcdfghjklmnprstvwxyz')).toEqual('bcdfghjklmnprstvwxyz');
  });
});

describe(`1.5 - Verificando se as strings passadas por parametros para as duas
funções tem o mesmo tamanho da string retornada:`, () => {
  const sentence = 'ViniciusAlvesDaRocha';
  it('Testando o tamanho do retorna da função encode:', () => {
    expect(encode(sentence).length).toEqual(sentence.length);
  });
});