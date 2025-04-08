//É possível passar mais de um decorator para uma classe
type Constructor = new (...args: any[]) => any;

function decoratorInverter(param1: string, param2: string) {
  return function (target: Constructor) {
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

function anotherDecorator(target: Constructor) {
  console.log('Another Decorator');
  return target;
}

//Basta 'empilhar' os decorators e a classe passará por todos eles

@anotherDecorator
@decoratorInverter('value1', 'value2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

const animal = new Animal('dog', 'black');
console.log(animal);
