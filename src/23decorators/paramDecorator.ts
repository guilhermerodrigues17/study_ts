//é possível usar decorators em parâmetros também, mas este apenas assiste valores; Seu retorno é ignorado
export class Person {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
  ) {}

  method(@paramDecorator msg: string) {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.surname;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();

    if (!firstName) return;

    this.name = firstName;
    this.surname = words.join(' ');
  }
}

function paramDecorator(
  target: any,
  propertyKey: string | symbol,
  index: number,
) {
  console.log(target);
  console.log(propertyKey);
  console.log(index);
}

const person = new Person('John', 'Newman', 25);
console.log(person.method('message'));
