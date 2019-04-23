const { assert } = require('chai');
const romanToInt = require('../index');
const intToRoman = require('../index');

describe('Conversor de Algarismos Romanos para números inteiros e vice e versa', () => {
  describe('romano para inteiro', () => {
    it('xxvi', () => {
      assert.equal(romanToInt.romanToInt('xxvi'), 'Resultado: 26');
    });
    it('CdI', () => {
      assert.equal(romanToInt.romanToInt('CdI'), 'Resultado: 401');
    });
    it('vazio', () => {
      assert.equal(romanToInt.romanToInt(''), ':/ Algarismo invalido. Tente de novo...');
    });
  });
  describe('inteiro para romano', () => {
    it('28', () => {
      assert.equal(intToRoman.intToRoman(28), 'Resultado: XXVIII');
    });
    it('0', () => {
      assert.equal(intToRoman.intToRoman(0), ':/ Numero invalido. Tente de novo...');
    });
    it('121', () => {
      assert.equal(intToRoman.intToRoman(121), 'Resultado: CXXI');
    });
  });
});

