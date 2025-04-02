//Generics pode ser usado com interfaces e types também
interface PersonProtocol<T, U> {
  name: T;
  surname: T;
  age: U;
}

type PersonProtocolType<T, U> = {
  name: Array<T>;
  registry: U;
  age: U;
};

const p1: PersonProtocol<string, number> = {
  name: 'Jake',
  surname: 'Harrison',
  age: 18,
};

const p2: PersonProtocolType<string, number> = {
  name: ['Jake', 'Harrison'],
  registry: 12345,
  age: 18,
};

console.log(p1);
console.log(p2);
