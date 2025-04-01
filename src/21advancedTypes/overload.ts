//TS possibilita a criação de overloads para métodos
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (x: number, y: number, ...args: number[]): number;
};

//É necessário fazer checagens para cumprir as assinaturas do type
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
