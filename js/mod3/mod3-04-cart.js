//[P]Работаем с коллекцией товаров в корзине:
//getItems()
//add(product)
//remove(productName)
//clear()
//countTotalPrice()
//increaseQuantity(productName)
//decreaseQuantity(productName)

const cart = {
  items: [],
  //получаем продукт из массива товаров
  getItems() {
    return this.items; //возвращаем ссылка на массив items
  },
  //добавляем товар в массив items
  add(product) {
    const { items } = this;
    const newProduct = {
      ...product,
      quantity: 1,
    };
    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        console.log('Такой продукт уже есть', product.name);
        return;
      }
    }
    items.push(newProduct);
  },
  //удалить товар из корзины
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log('нашли', productName);
      }
      if (productName === this.name) {
        console.log('нашли', productName);
        console.log('индекс: ', i);
        this.items.splice(i, 1); //на индексе (i) удалить 1 элемент
      }
    }
  },
  //деструктуризированный вариант
  remove(productName) {
    const { items } = this; //деструктуризация this
    for (let i = 0; i < items.length; i += 1) {
      //деструктуризация this
      const { name } = items[i]; //деструктуризация name в items
      if (productName === name) {
        console.log('нашли', productName);
        console.log('индекс: ', i);
        items.splice(i, 1); //на индексе (i) удалить 1 элемент
      }
    }
  },
  //общая сумма
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) { },
  decreaseQuantity(productName) { },
  getProductTotalPrice(product) { },
  //очистка корзины
  clear() {
    this.items = []; //перезаписываем на пустой массив
  },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
console.table(cart.getItems());

cart.remove('🍎');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.increaseQuantity('🍎')
console.table(cart.getItems());

const getProductTotalPrice = function ({ price, quantity }) {
  return `Item total price: ${price * quantity}`;
};
console.log(getProductTotalPrice(cart.items[0]));

cart.clear();
console.log(cart.getItems());
