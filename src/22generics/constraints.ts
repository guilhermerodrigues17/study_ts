//Para fazer uma restrição em generics deve-se usar a palavra 'extends'
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

export const getKey: GetKeyFn = (obj, key) => obj[key];

const person = {
  name: 'John',
  vaccines: ['Influenza', 'Covid-19'],
};

const name = getKey(person, 'name');
console.log(name);

const vaccines = getKey(person, 'vaccines');
console.log(vaccines);
