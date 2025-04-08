//São funções que retornam uma função decoradora; É útil quando se deseja receber parâmetros para o decorator
@decoratorInverter('value1', 'value2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

function decoratorInverter(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverte(args[0]) + ' ' + param1;
        this.color = this.inverte(args[1]) + ' ' + param2;
      }

      inverte(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

const animal = new Animal('dog', 'black');
console.log(animal);
