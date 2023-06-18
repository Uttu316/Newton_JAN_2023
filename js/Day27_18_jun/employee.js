// Your code here

function Employee(name, yearOfJoin, location) {
  this.name = name;
  this.yearOfJoin = yearOfJoin;
  this.location = location;

  let salary;

  this.getEmployeeDetails = function () {
    return `Name: ${this.name}, Year of Join: ${this.yearOfJoin}, Location: ${this.location}`;
  };

  this.setSalary = function (amount) {
    salary = amount;
  };

  this.getSalary = function () {
    return salary;
  };
}
