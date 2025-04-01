//É possível utilizar uma chave de um type para espelhar esse mesmo tipo em um type diferente
type Vehicle = {
  brand: string;
  year: number;
};

//Esse type espelha Vehicle
type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Ka',
};

console.log(car);
