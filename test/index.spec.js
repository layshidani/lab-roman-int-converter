const { assert } = require('chai');
const { romanToInt, intToRoman } = require('../index');

describe('Conversor de Algarismos Romanos para números inteiros e vice e versa', () => {

  describe('romano para inteiro', () => {
    it('xxvi', () => {
      assert.equal(romanToInt('xxvi'), 'Resultado: 26');
    });
    it('CdI', () => {
      assert.equal(romanToInt('CdI'), 'Resultado: 401');
    });
    it('vazio', () => {
      assert.equal(romanToInt(''), ':/ Algarismo invalido. Tente de novo...');
    });
    it('20', () => {
      assert.equal(romanToInt(20), ':/ Algarismo invalido. Tente de novo...');
    });
  });
  
  describe('inteiro para romano', () => {
    it('28', () => {
      assert.equal(intToRoman(28), 'Resultado: XXVIII');
    });
    it('121', () => {
      assert.equal(intToRoman(121), 'Resultado: CXXI');
    });
    it('"121"', () => {
      assert.equal(intToRoman('121'), 'Resultado: CXXI');
    });
    it('0', () => {
      assert.equal(intToRoman(0), ':/ Numero invalido. Tente de novo...');
    });
    it('-1', () => {
      assert.equal(intToRoman(-1), ':/ Numero invalido. Tente de novo...');
    });
  });
});

