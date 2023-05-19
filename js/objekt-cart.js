//Работаем с коллекцией товаров в корзине:
//getItems()
//add(product)
//remove(productName)
//clear()
//countTotalPrice()
//increaseQuantity(productName)
//decreaseQuantity(productName)

const cart = {
  items: [],
  getItems() {
    // return this.items,
  },
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍎')

// console.table(cart.getItems);

// cart.clear();

// console.table(cart.getItems());

// cart.increaseQuantity('🍎')

// console.table(cart.getItems());
