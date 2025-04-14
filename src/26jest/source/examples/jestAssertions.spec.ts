//Testes com asserções; Não é ideal fazer testes com muitas asserções, ideal separar por responsabilidades
describe('Primitive values', () => {
  it('Should test jest assertions', () => {
    const number = 10;

    //Igualdade
    expect(number).toBe(10);
    expect(number).toEqual(10);

    //Verificação booleana
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).not.toBeNull();

    //Comparações
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    //Proximidade com ponto flutuante
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.997);

    //Verificar propriedades
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('Should test jest assertions with objects', () => {
    const person = { name: 'John', age: 25 };
    const anotherPerson = { ...person };

    //Igualdade em objetos
    expect(anotherPerson).toEqual(person);

    //Propriedades
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('age', 25); // -> valor específico para property
    expect(person).not.toHaveProperty('lastName');

    expect(person.name).toBe('John');
  });
});
