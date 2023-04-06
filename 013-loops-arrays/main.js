// Loops and Arrays

const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
    myMPG.push(MPG)
    myTripCost.push(tripCost)

}

const calculateMPGAvg = () => {
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = Math.round(totalMPG/myMPG.length)
    updateDOM(`Average MPG is ${avgMPG}`)
}

//calculateAvgCost
// ^^^ tried but struggled quite a bit, went back to working code

// commit message "my code for cal average cost"
// * round average MPG 

trackMPGandCost(360, 15, 5.40)
trackMPGandCost(320, 12, 5)
trackMPGandCost(100, 7, 4.40)
trackMPGandCost(600, 24, 5.70)
trackMPGandCost(50, 2, 3)
trackMPGandCost(320, 12, 5)
calculateMPGAvg()