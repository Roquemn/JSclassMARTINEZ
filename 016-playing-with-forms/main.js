const FORM = document.getElementById('form-input')


const MY_SLICES = []
const MY_MEAL_COST = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (slices, calories, price = 4) => {
    const CalAvg = Math.round(calories / slices)
    const MealCost = Math.round(slices * price)
    updateDOM(`Average calorie count per slice is ${CalAvg}, your wallet is  ${MealCost} dollars lighter, sorry!`)
    MY_SLICES.push(CalAvg)
    MY_MEAL_COST.push(MealCost)

}

const calculateSUM = (arr) => {
    let sum = 0 
    for(value of arr) {
        sum += value
    }
    return sum
}

const calculateAvg = () => {
    let sumCalAvg = calculateSUM(MY_SLICES)
    let sumMealCost = calculateSUM(MY_MEAL_COST)
    let avgCalAvg = Math.round(sumCalAvg/MY_SLICES.length)
    let avgMealCost = Math.round(sumMealCost/MY_MEAL_COST.length)
    updateDOM(`Average Calorie count is ${avgCalAvg}`)
    updateDOM(`Average Meal visit is ${avgMealCost}`)
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const slices = parseInt(e.target.slices.value)
    const calories = parseInt(e.target.calories.value)
    const price = parseInt(e.target.price.value)
    trackMPGandCost(slices, calories, price)
})

// trackMPGandCost(360, 15, 5.40)
// trackMPGandCost(320, 12, 5)
// trackMPGandCost(100, 7, 4.40)
// trackMPGandCost(600, 24, 5.70)
// trackMPGandCost(50, 2, 3)
// trackMPGandCost(320, 12, 5)
// calculateAvg()
