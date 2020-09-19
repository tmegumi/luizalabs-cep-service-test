import { isValidLength, isNumber } from './validateInput';

describe('validateInput', () => {
  describe('isValidLength', () => {
    it('should return true for valid input length', () => {
      const isValid = isValidLength('Some test', 3, 20);

      expect(isValid).toBeTruthy();
    });

    it('should return true for valid input and fixed length', () => {
      const isValid = isValidLength('Some test', 9, 9);

      expect(isValid).toBeTruthy();
    });

    it('should return false for invalid max length input', () => {
      const isValid = isValidLength('Some test', null, 2);

      expect(isValid).toBeFalsy();
    });

    it('should return false for invalid min length input', () => {
      const isValid = isValidLength('Some test', 20, null);

      expect(isValid).toBeFalsy();
    });
  });

  describe('isNumber', () => {
    it('should return true for number value', () => {
      const isValid = isNumber('123');

      expect(isValid).toBeTruthy();
    });

    it('should return false for not number value', () => {
      const isValid = isNumber('abc');

      expect(isValid).toBeFalsy();
    });
  });
});
