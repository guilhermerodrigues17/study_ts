//Array<T> ou T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatArgs(...args: string[]): string {
  return args.join('');
}

export function toUpperCaseArgs(...args: Array<string>): Array<string> {
  return args.map((value) => value.toUpperCase());
}

console.log(multiplyArgs(1, 2, 3));
console.log(concatArgs('a', 'b', 'c'));
console.log(toUpperCaseArgs('a', 'b', 'c'));
