//void indica uma função sem retorno, ou que retorna undefined
//É aconselhado sempre deixar o método com o tipo de retorno explícito

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const people = {
  name: 'John',
  surname: 'Stevenson',
  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

people.showName();
console.log(noReturn('a', 'b', 'c'));

export { people };
