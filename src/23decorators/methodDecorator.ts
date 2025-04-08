//Decorators também podem ser aplicados à métodos, porém a função contém uma assinatura diferente
export class Person {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
  ) {}

  @methodDecorator
  method(msg: string) {
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

//um decorador de métodos deve ter essa assinatura
function methodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

const person = new Person('John', 'Newman', 25);
console.log(person.method('message'));
