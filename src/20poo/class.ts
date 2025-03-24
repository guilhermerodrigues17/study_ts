//classes são semelhantes as do Java; São moldes para criar objetos e funcionam como tipos também
export class Enterprise {
  public readonly name: string; //public é redundante em qualquer atributo
  private readonly employee: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setEmployee(employee: Employee) {
    this.employee.push(employee);
  }
}

//TS possibilita criar uma classe passando os atributos direto no construtor, com modificadores de acesso e tipo
class Employee {
  constructor(
    readonly name: string,
    readonly surname: string,
  ) {}
}

const employee1 = new Employee('John', 'North');
const employee2 = new Employee('Mary', 'Sun');
const employee3 = new Employee('Rachel', 'Amber');

const enterprise1 = new Enterprise('Meta', '111111111/0001-11');
enterprise1.setEmployee(employee1);
enterprise1.setEmployee(employee2);
enterprise1.setEmployee(employee3);

console.log(enterprise1);
