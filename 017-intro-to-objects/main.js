const myArr = [];

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9;
const myObj = {
  name: "roque",
  age: 36,
  hobbies: ["running", "sleeping", "reading"],
  mobile: {
    make: "Samsung S21",
    OS: "android",
  },
  myGreeting: function (person) {
    return `What is up ${person}?`;
  },
};

const greeting = myObj.myGreeting('Roque')
console.log(greeting)
