//Usando inferência de tipos, a partir da criação do objeto não será possível inserir uma nova key no objeto
const objA: { keyA: string; keyB: string } = {
  keyA: 'valueA',
  keyB: 'valueB',
};

objA.keyA = 'valueAA';
objA.keyB = 'valueBB';
//objA.keyC = 'valueC'; -> não funciona, será possível usando unknown, Record<string, unknown> ou [key: string]: unknown
//entretanto não é aconselhado utilizar o unknown, apenas se for realmente necessário

console.log(objA.keyA, objA.keyB);
