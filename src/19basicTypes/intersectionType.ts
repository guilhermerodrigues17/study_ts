// & -> pode ser lido como AND quando usado com type; pode ser usado para pegar a interseção entre tipos
type Name = { name: string };
type Surname = { surname: string };
type Age = { age: number };

type Person = Name & Surname & Age;

const person: Person = {
  name: 'John',
  surname: 'Bronks',
  age: 25,
};

console.log(person);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD; //Tem o valor "A" como tipo
const a: Intersection = 'A';

console.log(a);

//module exports
export default 1;
