//type funciona de maneira similar as interfaces, propondo um contrato que a classe deve implementar;
//Usa a palavra 'implements'
export type PersonType = {
  name: string;
  surname: string;
  completeName(): string;
};

//Não aceita private ou protected; Usar classes como tipo para esses casos de encapsulamento necessário
export class Person implements PersonType {
  constructor(
    public name: string,
    public surname: string,
  ) {}

  completeName(): string {
    return this.name + ' ' + this.surname;
  }
}

const person = new Person('John', 'Keny');
console.log(person.completeName());
