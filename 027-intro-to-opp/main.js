class Person {
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address
  }
  showStatus() {
    console.log(`${this.firstName} lives at ${this.address} `)
  }
}

const roque = new Person("Roque", "Martinez", "555 Long Way Drive")
roque.showStatus()
const jane = new Person("Jane", "Doe", "444 Short Way Drive")
jane.showStatus()
