//Tipo any é um tipo que engloba qualquer outro tipo
//Não recomendado utilizar; Como o tsconfig está strict: true, eslint não aceita any implícito

/*
function showMessage(msg: any): any {
  return msg;
}

console.log(showMessage([1, 2, 3])); -> 1,2,3
console.log(showMessage('Hello'); -> Hello
console.log(showMessage(23)); -> 23
*/

function showMessage(msg: string) {
  return msg;
}

console.log(showMessage('Hello'));
