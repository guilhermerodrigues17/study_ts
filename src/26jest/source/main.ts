/*
Dependency Inversion Principle - Módulos de alto nível não devem depender de módulos de baixo nível.
Ambos devem depender de abstrações!

Dependência de abstrações (interfaces, types, classes abstratas) não de implementações.

Baixo nível - executa tarefas (traz detalhes)
Alto nível - gerenciam as classes de baixo nível
*/

import { IndividualCustomer } from './classes/customer';
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
const individualCustomer = new IndividualCustomer(
  'John',
  'Newman',
  '111.111.111-11',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('T-Shirt', 20.99));
shoppingCart.addItem(new Product('Soap', 4.5));
shoppingCart.addItem(new Product('Notebook', 8.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

order.checkout();
console.log('Order status: ' + order.orderStatus);
