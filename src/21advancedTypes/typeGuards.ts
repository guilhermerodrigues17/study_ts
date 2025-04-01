//Verificações de tipo em casos mais complexos
export function add(a: unknown, b: unknown): number | string {
  //Verificações por typeof
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));

type Person = { typo: 'person'; name: string };
type Object = { typo: 'object'; color: string };
type PersonOrObject = Person | Object;

export class Student implements Person {
  typo = 'person' as const;
  constructor(public name: string) {}
}

export function showName(obj: PersonOrObject): void {
  //Verificações por atributos
  if ('name' in obj) console.log(obj.name);
  if (obj instanceof Student) console.log(obj.name);

  //Verificações por 'typo' no type implementado
  switch (obj.typo) {
    case 'person':
      console.log(obj.name);
      return;
    case 'object':
      console.log('Object: ' + obj.color);
      return;
  }
}

showName(new Student('John'));
showName({ typo: 'object', color: 'red' });
