const { assert } = require('chai');
const romanToInt = require('../index');
const intToRoman = require('../index');

describe('romanToInt', () => {
  it('romanToInt', () => {
    assert.equal(romanToInt('xxvi'), Resultado: 26);
  });
  it('romanToInt', () => {
    assert.equal(romanToInt('CdI'), Resultado: 111);
  });
  it('romanToInt', () => {
    assert.equal(romanToInt(''), ':/ Algarismo inválido. Tente de novo...');
  });
});

describe('intToRoman', () => {
  it('intToRoman', () => {
    assert.equal(intToRoman(28), Resultado: XXVIII);
  });
  it('intToRoman', () => {
    assert.equal(intToRoman(0), Resultado: 111);
  });
  it('intToRoman', () => {
    assert.equal(intToRoman(121), Resultado: CDDI);
  });
});
