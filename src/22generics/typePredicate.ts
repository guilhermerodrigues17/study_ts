//Em casos de funções que retornam um boolean, é possível usar predicate para indicar qual o type no caso de 'true';
//^^ geralmente ocorre em funções utilitárias ou de verificação

//quando retornar true, value será necessariamente um number
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const returnVar = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return returnVar;
}

console.log(sum(1, 2, 3));
console.log(sum('a', 'b', 'c')); //retorna 0, que é o valor inicial do reduce em sum
