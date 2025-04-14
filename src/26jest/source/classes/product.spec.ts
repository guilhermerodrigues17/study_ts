import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  it('should receive appropriate args', () => {
    const sut = createSut('T-shirt', 49.9);

    expect(sut).toHaveProperty('name', 'T-shirt');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
