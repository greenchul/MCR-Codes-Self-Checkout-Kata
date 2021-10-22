// 3 - As a user, I would like to be able to see the total price of all items in my basket.
// 4 - As a user, I would like to be able to remove an item from my basket

const { orange, apple, banana, pineapple, kiwi, items } = require("./data");

class SelfCheckout {
  constructor() {
    this.basket = [];
  }
  scanItem(barcode) {
    const result = items.find((product) => {
      return product.barcode === barcode;
    });
    return result;
  }
  addItemToBasket(item) {
    this.basket.push(item);
  }
  calculateTotal() {
    const total = this.basket.reduce((acc, currentItem) => {
      return acc + currentItem.price;
    }, 0);
    return total;
  }
  removeItem(item) {
    const itemIndex = this.basket.findIndex((item) => {
      return item;
    });
    this.basket.splice(itemIndex, 1);
  }
}

module.exports = {
  SelfCheckout,
};
