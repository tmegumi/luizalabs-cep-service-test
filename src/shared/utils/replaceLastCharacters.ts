export default function replaceLastCharacters(
  value: string,
  replaceToChar: string,
  lengthToReplace: number,
): string {
  const notReplaceValueSize = value.length - lengthToReplace;

  const lastZeroCharacters = replaceToChar.repeat(lengthToReplace);

  return value.slice(0, notReplaceValueSize) + lastZeroCharacters;
}
