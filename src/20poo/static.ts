//Métodos e atributos static só podem ser acessados a partir da classe diretamente
export class Person {
  static defaultAge = 0;
  static defaultCpf = '000000000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, this.defaultAge, this.defaultCpf);
  }
}

const person = Person.createPerson('John', 'Stroll');
const person2 = new Person('Mary', 'Simon', 25, '111222333-44');

console.log(person);
console.log(person2);
