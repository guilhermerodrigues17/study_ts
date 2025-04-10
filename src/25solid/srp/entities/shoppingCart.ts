import { CartItem } from './interfaces/cartItem';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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
      .reduce((prev, current) => prev + current.price, 1)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart has been cleaned... ');
    this._items.length = 0;
  }
}
