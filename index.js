

// 3 - As a user, I would like to be able to see the total price of all items in my basket.
// 4 - As a user, I would like to be able to remove an item from my basket

const { orange, apple, banana, pineapple, kiwi, items } = require("./data")

let customerBasket = []


// 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

const scanItem = (barcode)=>{
    let result = items.find((product)=>{
        return product.barcode === barcode
    })
    return result
}


// 2 - As a user, I would like to be able to add an item to basket.
const addItemToBasket = (item) =>{
    customerBasket.push(item)
}


// 3 - As a user, I would like to be able to see the total price of all items in my basket.
const calculateTotal = (basket) =>{
   let total =  basket.reduce((acc, currentItem)=>{
        return acc + currentItem.price
    },0)
    return total
}

const removeItem = (item) =>{
    let itemIndex = customerBasket.findIndex((item)=>{
        return item
    })
    customerBasket.splice(itemIndex, 1)
}


module.exports = { scanItem, customerBasket, addItemToBasket, calculateTotal, removeItem}