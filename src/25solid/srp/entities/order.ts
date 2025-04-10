import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty...');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage('Order received!');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
