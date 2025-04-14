import { CustomerOrder } from './interfaces/customerProtocol';
import { MessagingProtocol } from './interfaces/messagingProtocol';
import { OrderStatus } from './interfaces/orderStatus';
import { PersistencyProtocol } from './interfaces/persistencyProtocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCartProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
