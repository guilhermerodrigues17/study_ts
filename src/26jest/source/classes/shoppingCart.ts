import { Discount } from './discount';
import { CartItem } from './interfaces/cartItem';
import { ShoppingCartProtocol } from './interfaces/shoppingCartProtocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private discount: Discount) {}

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((prev, current) => prev + current.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return +this.discount.calculate(this.total()).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart has been cleaned... ');
    this._items.length = 0;
  }
}
