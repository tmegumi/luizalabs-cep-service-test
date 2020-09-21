export default function getLastCharactersAsCharLength(
  value: string,
  charToValidate: string,
): number {
  if (charToValidate.length !== 1) {
    throw new Error('charToValidate length has to be 1.');
  }

  const reversedValue = value.split('').reverse();

  let size = 0;

  for (size; size < reversedValue.length; size += 1) {
    if (reversedValue[size] !== charToValidate) {
      break;
    }
  }

  return size;
}
