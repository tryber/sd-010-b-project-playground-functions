const functions = require('./challenges.js');

describe('is functions?', () => {
  it('encode is a function?', () => {
    expect(typeof functions.encode).toBe('function');
  });
  it('decode is a function?', () => {
    expect(typeof functions.decode).toBe('function');
  });
});

describe('vowel decoder', () => {
  it('encode is encoding?', () => {
    expect(functions.encode('aeiou')).toBe('12345');
  });
  it('decode is decoding?', () => {
    expect(functions.decode('12345')).toBe('aeiou');
  });
});

describe('consoants and number docoder', () => {
  it('encode consoants', () => {
    expect(functions.encode('bcdfghjklmnpqrstvxz6789')).toBe('bcdfghjklmnpqrstvxz6789');
  });
  it('decode consoants', () => {
    expect(functions.decode('bcdfghjklmnpqrstvxz6789')).toBe('bcdfghjklmnpqrstvxz6789');
  });
});

describe('lenght string', () => {
  it('encode lenght?', () => {
    expect((functions.encode('a1e2i3o4u5')).length).toBe(10);
  });
  it('decode lenght', () => {
    expect(functions.decode('a1e2i3o4u5').length).toBe(10);
  });
});
