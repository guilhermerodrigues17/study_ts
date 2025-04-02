//Generics podem ser usadas com classes
export class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

const p1 = new Person('John', 20);
console.log(p1);

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.showStack();

console.log('____pop()____');

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
