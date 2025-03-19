//Tuple = um array com tipos específicos e tamanho fixo
const tupleEx1: readonly [string, number] = ['a', 1];
const tupleEx2: [string, number, number] = ['a', 1, 2];
const tupleEx3: [string, number, number?] = ['a', 1];
const tupleEx4: [string, number, ...number[]] = ['a', 1, 2, 3, 4]; // Aqui básicamente se torna um Array

tupleEx2[0] = 'A';
tupleEx3[2] = 10;

console.log(tupleEx1);
console.log(tupleEx2);
console.log(tupleEx3);
console.log(tupleEx4);

//readonly array
const readonlyArr1: readonly string[] = ['a', 'b'];
const readonlyArr2: ReadonlyArray<string> = ['a', 'b'];

console.log(readonlyArr1);
console.log(readonlyArr2);
