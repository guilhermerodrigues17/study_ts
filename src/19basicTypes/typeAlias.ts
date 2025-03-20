//É um bloco para definir um conjunto de tipos. Seta um contrato de tipos que terá que ser implementado pela estrutura que o utilizar
type Age = number; //por convenção, o nome é sempre com letra maiúscula
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferedColor?: string;
};

type RGBColors = 'red' | 'green' | 'blue';
type CMYKColors = 'cian' | 'magenta' | 'yellow' | 'black';
type PreferedColor = RGBColors | CMYKColors; //union types funcionando como um enum, porém com maior segurança

const person: Person = {
  name: 'John',
  age: 25,
  salary: 200_000, //<- 200000
};

export function setPreferedColor(person: Person, color: PreferedColor): Person {
  return { ...person, preferedColor: color };
}

console.log(setPreferedColor(person, 'blue'));
console.log(person);
