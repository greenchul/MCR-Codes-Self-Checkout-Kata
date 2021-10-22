// 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

// 2 - As a user, I would like to be able to add an item to basket.
// 3 - As a user, I would like to be able to see the total price of all items in my basket.
// 4 - As a user, I would like to be able to remove an item from my basket

const { SelfCheckout } = require("../index");
const { orange, apple, banana, pineapple, kiwi, items } = require("../data");

const mySelfCheckout = new SelfCheckout();

describe("scanItem", () => {
  it("should return product details as object when passed barcode", () => {
    expect(mySelfCheckout.scanItem(kiwi.barcode)).toBe(kiwi);
  });
});

describe("add item to basket", () => {
  it("should add an item to the customers basket", () => {
    expect(mySelfCheckout.basket).toEqual([]);
    mySelfCheckout.addItemToBasket(orange);
    expect(mySelfCheckout.basket.length).toEqual(1);
  });
});

describe("Calculate the total price of the basket", () => {
  it("Should equal 7 when basket contains 1 orange and nothing else", () => {
    expect(mySelfCheckout.calculateTotal()).toBe(7);
  });
  it("Should equal 32 when basket contains 1 orange and 1 kiwi and nothing else", () => {
    mySelfCheckout.addItemToBasket(kiwi);
    expect(mySelfCheckout.calculateTotal()).toBe(32);
  });
});

describe("Remove specified item from basket", () => {
  it("Should remove kiwi from basket and contain only orange", () => {
    mySelfCheckout.removeItem(kiwi);
    expect(mySelfCheckout.basket.length).toEqual(1);
  });
});
