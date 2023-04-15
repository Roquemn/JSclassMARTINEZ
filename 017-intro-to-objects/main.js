const myArr = [];

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9;
const myObj = {
  name: "Roque",
  age: 36,
  likes: 0,
  hobbies: ["running", "sleep", "reading"],
  mobile: {
    make: "Samsung S21",
    OS: "android",
  },
  myGreeting: function (person) {
    console.log(this);
    return `${this.name} who loves to ${this.hobbies[1]} says What is up ${person}?`;
  },
  increaseLikes: function () {
    this.likes += 1;
  },
};

const roqueObj = myObj;
roqueObj.increaseLikes();
console.log(roqueObj);
roqueObj.age = 37;

const greeting = myObj.myGreeting("Erica");
console.log(greeting);

console.log(myObj.mobile.make.length);

for (key in myObj) {
  console.log(`key ${key} and value ${myObj[key]}`);
}
