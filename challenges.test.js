const { encode, decode } = require('./src/challenges');

describe('1.1 - Ferificar se as funções encode() e decode() são do tipo function', () => {
  it('A função encode é do tipo function', () => {
    expect(typeof encode).toBe('function');
  });
  it('A função decode é do tipo function', () => {
    expect(typeof decode).toBe('function');
  });
});

test('1.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
  expect(encode('aeiou')).toBe('12345');
});
