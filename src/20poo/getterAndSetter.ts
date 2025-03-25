//TS e JS suportam as palavras 'get' e 'set' então é possivel utilizá-las para getters e setters
export class Person {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string,
  ) {}

  //Aqui o 'cpf' se comporta como um atributo da classe, mas ainda sim é um método
  get cpf(): string {
    console.log('Using getter');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(value: string) {
    console.log('Using setter');
    this._cpf = value;
  }
}

const person = new Person('Jenna', 'Simmons', 23, '111.111.111-00');
person.cpf = '112.223.334-55'; //usando o sinal de atribuição = estará usando o setter
console.log(person.cpf); //usando como se quisesse acessar um valor estará utilizando o getter
