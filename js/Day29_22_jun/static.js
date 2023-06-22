class User {
  constructor() {
    this.sayHello = function () {
      console.log("hello");
    };
  }
  sayHi() {
    console.log("Hi");
  }

  static calculateSalary(tax, totalSalary) {
    return totalSalary - tax;
  }
}

const u = new User();
console.log(u);
console.log(User.calculateSalary(500000, 4500000));
