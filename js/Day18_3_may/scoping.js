// Global Scope
function printUserInfo() {
  // Function Scope
  var obj = {
    name: "Utkarsh",
    age: 24,
    city: "Agra",
  };

  if (true) {
    // Block Scope
    let x = 3;
    console.log(obj, x);
  }

  console.log(obj, x);
}

printUserInfo();

console.log(obj);

let x = 0; // 2
if (x < 2) {
  var y = 5;
  x = 2;
  console.log(y, x);
}

console.log(x, y);

let x = 0;
if (x < 2) {
  let y = 5;
  x = 2;
  console.log(y, x);
}

console.log(x, y);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("final", i);

try {
  const e = new Error("Heyy Its Error");
  e.message = "Oops";
  e.type = "MyCustomType";
  throw e;
} catch (error) {
  console.log(error.type);
  console.log(error.message);
} finally {
}
console.log("hey");

