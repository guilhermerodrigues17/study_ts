//super é um objeto que aponta diretamente para a superclasse; é uma maneira de acessar a superclasse
export class Person {
  constructor(
    public name: string,
    public surname: string,
    private _age: number,
    private cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf;
  }

  get age(): number {
    return this._age;
  }

  getCompleteName(): string {
    return this.name + ' ' + this.surname;
  }
}

//Para adicionar novos atributos em uma subclasse, é necessário montar o construtor com os atributos da superclasse e passar para o 'super()'
//^^Isso indica que esses atributos devem ser montados no construtor da superclasse
export class Employee extends Person {
  constructor(
    name: string,
    surname: string,
    _age: number,
    cpf: string,
    private _registry: string,
  ) {
    super(name, surname, _age, cpf);
  }

  get registry(): string {
    return this._registry;
  }

  getCompleteName(): string {
    return 'Employee: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('John', 'Mark', 25, '000000000-00');
const employee = new Employee('John', 'Mark', 25, '000000000-00', '0001');

console.log(person);
console.log(employee);
