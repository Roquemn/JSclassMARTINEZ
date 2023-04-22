function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

// == My Globals Variables == //

const gameTitle = 'Crash Bandicoot'
const rating = 9
const canPurchase = true


if(rating >= 6) {
    console.log('add to collection')
} else if(canPurchase) {
    console.log('may not buy')
} else {
    console.log('do not buy')
}