export default function replaceLastCharactersByZero(
  value: string,
  size: number,
): string {
  const notReplaceValueSize = value.length - size;

  const lastZeroCharacters = '0'.repeat(size);

  return value.slice(0, notReplaceValueSize) + lastZeroCharacters;
}
