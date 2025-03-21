//É um método para estreitar tipos de um elemento que tenha mais de uma possibilidade de tipo
const body1 = document.querySelector('body'); //-> nesse caso, body pode ser null também
if (body1) body1.style.background = 'red';

//type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

const input1 = document.querySelector('.input') as HTMLInputElement;
input1.value = 'Any value';
input1.focus();

/* Não recomendado */
//type assertion
const body3 = document.querySelector('body') as unknown as number;
body3.valueOf();

//non-null assertion
const body4 = document.querySelector('body')!;
body4.style.background = 'red';
