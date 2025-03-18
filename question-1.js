// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200
inventory.orange = {price: 20 , quantity : 300}

function getTotalPrice(fruit){
  let totalprice = 0
  for (let fruitType in fruit ){
    totalprice = totalprice  + (fruit[fruitType].price * fruit[fruitType].quantity)
  }
  return totalprice
}

let resultOfStockPrice = `Total inventory value : ${getTotalPrice(inventory)} baht`
console.log(resultOfStockPrice)