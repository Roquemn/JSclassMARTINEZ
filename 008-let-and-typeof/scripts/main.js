// let food = '8'
// let slices = 8
// let tasty = true
// let newVar = 'SOMETHING'
// const myConst = 42
// console.log(slices == food)
// console.log(slices === food)

// let myVar = null
// console.log(`myVar is typeof ${typeof myVar}`)

// console.log(`food is typeof ${typeof food}`)
// console.log(`food is value ${food}`)
// console.log(`slices is typeof ${typeof slices}`)
// console.log(`tasty is typeof ${typeof tasty}`)

//  DON'T USE VAR
// USE CONST, ITS A BIT MORE STABLE

// if (true) {
//     const myConst = 43
//     console.log(myConst)
// } else {

// }


// <== My Code ==> 

const myCar = 'Subaru'
let carModel = 'WRX'
let carValue = 9000

console.log(`myCar is typeof ${typeof myCar}`)
console.log(`carValue is value ${typeof carValue}`)
console.log(`carModel is typeof ${typeof carModel}`)

// == Example of Block Scope?
if (true) {
    const carValue = 9000
    console.log(carValue)
}

// <== Comparison operators ==>
console.log(9000 === carValue)
console.log(9000 == carModel)
console.log(9000 != carModel)