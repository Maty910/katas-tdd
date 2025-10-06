// type add = (numbers: string) => number


export const add = (numbers: string): number => {
  if (numbers === '') {
    return 0
  }
  if (numbers.length === 1) {
    return parseInt(numbers)
  }
  if (numbers.length > 1) {
    return numbers.split(',').map(Number).reduce((a, b) => a + b, 0)
  }
  return 1
}