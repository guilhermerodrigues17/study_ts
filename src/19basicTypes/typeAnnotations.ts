/*eslint-disable*/

//tipos básicos (ocorre inferência de tipos)
//declarar o tipo de maneira explícita somente quando for inferido 'any'

const personName: string = 'Guillherme'; // qualquer tipo de strings: '' "" ``
const age: number = 22; // 10, 1.54, -5, 0x00fd
const adult: boolean = true; //true or false
const symbolEx: symbol = Symbol('anything');
const big: bigint = BigInt(1000000000000);

//Arrays
const numbersArr: Array<number> = [1, 2, 3, 4];
const numbersArr2: number[] = [1, 2, 3, 4];
const stringsArr: Array<string> = ['a', 'b'];
const stringsArr2: string[] = ['a', 'b'];

//Objetos
const obj: { name: string; age: number; adult?: boolean } = {
  // ? indica que um atributo do objeto é opcional
  name: personName,
  age: age,
};

//Funções
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
