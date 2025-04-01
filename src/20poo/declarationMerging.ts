//Declaration merging em interfaces

interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
  age: number;
  nationality?: string;
}

const person: Person = {
  name: 'John',
  surname: 'Keppler',
  age: 25,
};

console.log(person);
