export default function getLastCharactersAsCharLength(
  value: string,
  charToValidate: string,
): number {
  const reversedValue = value.split('').reverse();

  let size = 0;

  for (size; size < reversedValue.length; size += 1) {
    if (reversedValue[size] !== charToValidate) {
      break;
    }
  }

  return size;
}
