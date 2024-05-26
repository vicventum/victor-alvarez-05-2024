function utilIsDifferentArray<T>(arrA: T[], arrB: T[]): boolean {
  return !![...arrA].filter((x) => ![...arrB].includes(x)).length
}

export { utilIsDifferentArray }
