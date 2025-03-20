// Union types é utilizado para anotar dois ou mais tipos para algum tipo de dado no TS
// string | number | boolean

function sumOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b; // é sempre necessário que se faça a verificação de tipos para esses casos
  return `${a}${b}`;
}
//Não é ideal que uma função faça duas coisas diferentes.

console.log(sumOrConcat(10, 20));
console.log(sumOrConcat(10, '20'));
console.log(sumOrConcat('10', 20));
console.log(sumOrConcat('10', '20'));
