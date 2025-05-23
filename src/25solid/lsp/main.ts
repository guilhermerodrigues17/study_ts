/*
Liskov Substitution Principle - Subtipos precisam ser substituíveis por seus tipos base
Como exemplo, em uma relação 'é-um', uma subclasse deve se comportar igualmente a superclasse
*/

import { NoDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-Shirt', 20.99));
shoppingCart.addItem(new Product('Soap', 4.5));
shoppingCart.addItem(new Product('Notebook', 8.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

order.checkout();
console.log('Order status: ' + order.orderStatus);
