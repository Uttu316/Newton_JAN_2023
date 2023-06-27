// closure

// scoping

function abc() {
  var x = 2;

  return function xyz() {
    console.log(x);
  };
}

// inner function has access  scope of parent function's scope

const output = abc();

output();

function add(x, y) {
  let sum = x + y;

  return function mul(z) {
    return sum * z;
  };
}

const multiplier = add(2, 3);

const output1 = multiplier(2);
const output2 = multiplier(3);

console.log(output2);

function setIntialSalary(x) {
  let value = x;
  return function increment(y) {
    value += y;
    return value;
  };
}

const incrementSalary = setIntialSalary(100);

const y1 = incrementSalary(10);
const y2 = incrementSalary(20);
const y3 = incrementSalary(30);
console.log(y1, y2, y3);

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(sum(2)(3)(4));

function sum(x) {
  return function (y) {
    if (y != null) {
      return sum(x + y);
    }
    return x;
  };
}

// currying
console.log(sum(2)(3)(0)(8)(3)());

var Sum = (x) => (y) => y != null ? Sum(x + y) : x;

console.log(Sum(2)(3)(6)(0)(3)());
