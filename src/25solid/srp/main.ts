import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shoppingCart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-Shirt', 20.99));
shoppingCart.addItem(new Product('Soap', 4.5));
shoppingCart.addItem(new Product('Notebook', 8.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
