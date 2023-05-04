let pizza

function orderPizza() {
    console.log('Order Pizza')
    setTimeout(() => {
        pizza = "🍕"
    }, 200)
    console.log('Pizza was Ordered')
}
orderPizza()
console.log(`Eat ${pizza}`)