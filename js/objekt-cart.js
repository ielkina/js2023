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
    return this.items; //ссылка на массив items
  },
  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      // console.log(item);
      if (item.name === product.name) {
        item.quantity += 1;
        // console.log('Такой продукт уже есть', product.name);
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this; //деструктуризация this

    // for (let i = 0; i < this.items.length; i += 1) {
    for (let i = 0; i < items.length; i += 1) {
      //деструктуризация this
      // const item = this.items[i];
      const { name } = items[i]; //деструктуризация name и this

      // if (productName === item.name) {
      //   console.log('нашли', productName);
      // }
      if (productName === name) {
        //деструктуризация
        console.log('нашли', productName);
        console.log('индекс: ', i);

        items.splice(i, 1); //на индексе (i) удалить 1 элемент
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    console.log(items);
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
  // getProductTotalPrice(product) {

  // }
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });

cart.add({ name: '🍌', price: 60 });

cart.add({ name: '🍋', price: 60 });

cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// cart.remove('🍎');

console.table(cart.getItems());
// cart.clear();

console.log(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎')

// console.table(cart.getItems());

const getProductTotalPrice = function ({ price, quantity }) {
  return price * quantity;
};

console.log(getProductTotalPrice(cart.items[0]));
