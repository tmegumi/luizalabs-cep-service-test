export function isValidLength(
  input: string,
  minLength?: number | null,
  maxLength?: number | null,
): boolean {
  if (minLength && input.length < minLength) {
    return false;
  }

  if (maxLength && input.length > maxLength) {
    return false;
  }

  return true;
}

export function isNumber(input: string): boolean {
  return /^\d+$/.test(input);
}
