//Similar aos types, propoe um contrato a ser implementado; Pode ser implementado por classe e objeto
export interface PersonInterface {
  name: string;
  surname: string;
  completeName(): string;
}

export interface PersonInterface2 extends PersonInterface {
  age: number;
}

export class Person implements PersonInterface2 {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
  ) {}

  completeName(): string {
    return this.name + ' ' + this.surname;
  }
}

const personObj: PersonInterface = {
  name: 'John',
  surname: 'Keny',
  completeName(): string {
    return this.name + ' ' + this.surname;
  },
};

const person = new Person('John', 'Keny', 25);
console.log(person.completeName());
console.log(personObj.completeName());
