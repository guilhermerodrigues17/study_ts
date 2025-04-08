//Age como um objeto impostor, podendo observar determinado objeto, modificá-lo ou substituí-lo por completo
//São funções chamadas em determinado momento do código, com a sintaxe '@decorator', por exemplo
//Pode se comparar com as annotations no Java
@decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

//Classe vai passar por essa função
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverte(args[0]);
      this.color = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('dog', 'black');
console.log(animal);
