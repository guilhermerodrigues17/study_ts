import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customerProtocol';
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
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
    this.messaging.sendMessage(
      `Order received! The total is $${this.cart.totalWithDiscount()}`,
    );
    console.log('Customer: ' + this.customer.getName(), this.customer.getIDN());
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
