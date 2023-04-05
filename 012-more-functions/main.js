//Update the DOM

const carMakes = ['Audi', 'Dodge', 'Ford', 'Subaru', 'Toyota']
console.log(carMakes.slice(2,4))

const myArr = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons
    const tripCost = MPG * price
    myArr.push(MPG, tripCost)
}



updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 12, 5))