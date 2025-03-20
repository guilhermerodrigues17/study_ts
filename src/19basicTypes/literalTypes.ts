/*eslint-disable*/
//São valores como tipo, se tornando um tipo específico para uma variável; Acontece naturalmente em const, já que o valor é imutável
const a = 10; //a é do tipo 10, que é um subtipo de number
let b: 10 = 10;
let c = 10 as const; //comportamento igual ao do const

const person = {
  name: 'John' as const, //name tem exatamente que ser 'John'
  surname: 'Bronks',
};

//Exemplo abaixo tem um funcionamento parecido com o enum, porém com maior segurança
function chooseColor(color: 'Red' | 'Blue' | 'Yellow') {
  return color;
}

console.log(chooseColor('Blue'));

//module mode
export default 1;
