class Person {
  constructor(firstName, lastName, address) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
  }
  getFirstName() {
    return `${this._firstName}`
  }
  setFirstName(newFirstName) {
    this._firstName = newFirstName
  }
  showStatus() {
    console.log(`${this.getFirstName} lives at ${this.address}`);
  }
  getLastName() {
    return `${this._lastName}`
  }
  setLastName(newLastName) {
    this._lastName = newLastName
  }
  showStatus() {
    console.log(`${this.getFirstName} lives at ${this.address}`);
  }
  getAddress() {
    return `${this._address}`
  }
  setAddress(newAddress) {
    this._address = newAddress
  }
  showStatus() {
    console.log(`${this.getFirstName} lives at ${this.address}`);
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

console.log(roque.getFirstName())

