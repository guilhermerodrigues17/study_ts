//Para criar uma classe com herança basta usar extends; não suporta herança de mais de uma classe
export class Person {
  constructor(
    public name: string,
    public surname: string,
    private _age: number,
    private cpf: string,
  ) {}

  //Jeito mais tradicional de criar getters e setters
  getCpf(): string {
    return this.cpf;
  }

  //Atalho para criar getters e setters
  get age(): number {
    return this._age;
  }

  getCompleteName(): string {
    return this.name + ' ' + this.surname;
  }
}

//É possível fazer o overload de métodos na herança
export class Employee extends Person {
  getCompleteName(): string {
    return 'Employee: ' + this.name + ' ' + this.surname;
  }
}

export class Customer extends Person {
  getCompleteName(): string {
    return 'Customer: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('John', 'Mark', 25, '000000000-00');
const employee = new Employee('John', 'Mark', 25, '000000000-00');
const customer = new Customer('John', 'Mark', 25, '000000000-00');

console.log(`Name: ${person.getCompleteName()}, Age: ${person.age}`);
console.log(employee.getCompleteName());
console.log(customer.getCompleteName());
