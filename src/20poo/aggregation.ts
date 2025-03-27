//Agregação de classes, no caso um-para-muitos
export class ShoppingCart {
  private readonly products: Array<Product> = [];

  pushProducts(...products: Array<Product>): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productsQuantity(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce(
      (sum, product) => Math.round((sum + product.price) * 100) / 100,
      0,
    );
  }
}

export class Product {
  constructor(
    private _name: string,
    private _price: number,
  ) {}

  public get price(): number {
    return this._price;
  }

  public get name(): string {
    return this._name;
  }
}

const shoppingCart = new ShoppingCart();
const product1 = new Product('T-Shirt', 20.99);
const product2 = new Product('Book', 15.99);
const product3 = new Product('Smartphone', 599.99);

shoppingCart.pushProducts(product1, product2, product3);
console.log(`Products quantity: ${shoppingCart.productsQuantity()}`);
console.log(`Total: ${shoppingCart.total()}`);
console.log();
console.log(shoppingCart);
