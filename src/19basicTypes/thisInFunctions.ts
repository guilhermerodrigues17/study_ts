//This em arrow function vai apontar para o escopo global
//This vai ser um implicit any. Para assinar o tipo de this, deve-se utilizar como primeiro arg de uma função;
//^ não vai ser considerado um argumento, sendo 'name' o primeiro argumento na função abaixo
export function fnEx(this: Date, name: string): void {
  console.log(this);
  console.log(name);
}

//necessário usar call ou apply para passar o argumento para this dentro da função
fnEx.call(new Date(), 'John');
fnEx.apply(new Date(), ['John']);
