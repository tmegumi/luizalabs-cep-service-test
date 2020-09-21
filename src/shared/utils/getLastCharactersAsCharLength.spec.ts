import getLastCharactersAsCharLength from './getLastCharactersAsCharLength';

describe('getLastCharactersAsCharLength', () => {
  it("should return '0' if not found any last characters as '0'", () => {
    const length = getLastCharactersAsCharLength('123456', '0');

    expect(length).toBe(0);
  });

  it("should return '3' if found 3 last characters as '0'", () => {
    const length = getLastCharactersAsCharLength('123000', '0');

    expect(length).toBe(3);
  });

  it('should throw an error charToValidate lenght is not 1', () => {
    const execute = () => getLastCharactersAsCharLength('123456t', '00');

    expect(execute).toThrow(Error);
  });
});
