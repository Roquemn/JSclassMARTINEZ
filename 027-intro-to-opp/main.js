class Person {
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
  showStatus() {
    console.log(`${this.firstName} lives at ${this.address} `);
  }
}

class Student extends Person {
  constructor(firstName, lastName, address, classList) {
    super(firstName, lastName, address);
    this.classList = classList;
  }
  showStatus() {
    console.log(`${this.firstName} lives at ${this.address} is taking ${this.classList}`);

  }
}

const roque = new Student("Roque", "Martinez", "555 Long Way Drive", [
  "Eng1A",
  "CIT93",
]);
roque.showStatus();
const jane = new Person("Jane", "Doe", "444 Short Way Drive");
jane.showStatus();
