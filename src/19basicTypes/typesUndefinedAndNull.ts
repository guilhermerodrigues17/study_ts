//undefined é quando algo ainda não foi definido ou pode não ser definido
let x; // <- aqui o x ainda não foi definido
if (typeof x === 'undefined') x = 10;
console.log(x * 10);

//Em casos em que se tem uma var não obrigatória ela se define como T | undefined
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//null é utilizado quando se quer especificar o retorno de uma função como podendo ser nulo, por exemplo
export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

//valor pode ser um number ou null
const squareOfNumber = squareOf(2);

//aqui o TS consegue identificar que na ultima condição o valor é necessáriamente um number
const res = squareOfNumber === null ? 'invalid' : squareOfNumber * 10;
console.log(res);
