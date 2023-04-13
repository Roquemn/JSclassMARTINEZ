const myArr = [];

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9;
const myObj = {
  name: "Roque",
  age: 36,
  hobbies: ["running", "sleep", "reading"],
  mobile: {
    make: "Samsung S21",
    OS: "android",
  },
  myGreeting: function (person) {
    console.log(this)
    return `${this.name} who loves to ${this.hobbies[1]} says What is up ${person}?`;
  },
};

const greeting = myObj.myGreeting('Erica')
console.log(greeting)
