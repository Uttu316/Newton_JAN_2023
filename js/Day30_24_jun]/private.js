class User {
  constructor(name) {
    this.name = name;
  }
  #salary = 0;

  getSalary() {
    console.log(this.#salary);
  }
  incrementSalary(amount) {
    this.#salary += amount;
  }
}

const u = new User("Vijay");

console.log(u);
u.getSalary();
u.incrementSalary(200);
u.getSalary();

//  u.#salary: error
