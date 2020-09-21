export default function replaceLastCharacters(
  value: string,
  replaceToChar: string,
  lengthToReplace: number,
): string {
  if (replaceToChar.length !== 1) {
    throw new Error('replaceToChar length has to be 1.');
  }

  const valueLength = value.length;

  if (valueLength < lengthToReplace) {
    throw new Error('lengthToReplace cannot be bigger than value length.');
  }

  const notReplaceValueSize = valueLength - lengthToReplace;

  const lastZeroCharacters = replaceToChar.repeat(lengthToReplace);

  return value.slice(0, notReplaceValueSize) + lastZeroCharacters;
}
