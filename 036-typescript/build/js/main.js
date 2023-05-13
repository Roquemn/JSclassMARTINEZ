"use strict";
let stringArr = ['one', 'hey', 'Roque'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'roque';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['roque', 36, true];
let mixed = ['martinez', 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Roque",
    prop2: true,
};
exampleObj.prop1 = 'roque';