import replaceLastCharacters from './replaceLastCharacters';

describe('replaceLastCharacters', () => {
  it('should not replace any character', () => {
    const result = replaceLastCharacters('Some text to test', '0', 0);

    expect(result).toBe('Some text to test');
  });

  it("should replace last character as '0'", () => {
    const result = replaceLastCharacters('Some text to test', '0', 1);

    expect(result).toBe('Some text to tes0');
  });

  it("should replace all characters as '0'", () => {
    const text = 'Some text to test';

    const result = replaceLastCharacters(text, '0', text.length);

    expect(result).toBe('00000000000000000');
  });
});
