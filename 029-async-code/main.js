function orderPizza(callback) {
    setTimeout(() => {
        const pizza = `🍕`
        callback(pizza)
    }, 2000)
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log(`Call Qoli`)

window.addEventListener('click', callback)

function callback() {
    console.log('clicked')
}



// <== Callback Hell ==> //

function thing1 (callback) {
    // Call Pizza Shop
    callback()
}
function thing2 (callback) {
    // Order the Pizza 
    callback()
}
function thing3 (callback) {
    // Eat the Pizza
    callback()
}

thing1(() => {
    thing2(() => {
        thing3()
    })
})

