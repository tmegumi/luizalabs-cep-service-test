import replaceLastCharactersByZero from '@shared/utils/replaceLastCharactersByZero';

describe('Function replaceLastCharactersByZero', () => {
  it('should not replace any character', () => {
    const result = replaceLastCharactersByZero('Some text to test', 0);

    expect(result).toBe('Some text to test');
  });

  it("should replace last character as '0'", () => {
    const result = replaceLastCharactersByZero('Some text to test', 1);

    expect(result).toBe('Some text to tes0');
  });

  it("should replace all characters as '0'", () => {
    const text = 'Some text to test';

    const result = replaceLastCharactersByZero(text, text.length);

    expect(result).toBe('00000000000000000');
  });
});
