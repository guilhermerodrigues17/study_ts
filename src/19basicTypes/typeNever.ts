//never é utilizado para indicar que a função nunca vai retornar nada ou vai lançar uma exceção

export function createException(): never {
  throw new Error('Error!');
}

console.log(createException());
