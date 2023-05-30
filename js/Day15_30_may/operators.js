const x = 2;
const y = 13;

// Airthmetic Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y % x);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

const o = 2 && null;

console.log(o);
const o = 2 && true && "" && false;

console.log(o);
const o = null || 1 || false || -1;

console.log(o);

const o = console.log(null) || (console.log(2) && 3);

console.log(o);

// ==
// ===
// !=
// !==
// >=
// <=
// <
// >

console.log(2 == 3);
console.log(3 == "3");
console.log(4 === "4");
console.log("" == 0);
console.log("" === 0);
console.log("avc" === "avc");
console.log(NaN == NaN); // false
console.log(null == undefined); // true
console.log(null === undefined);
console.log(4 != 2);
console.log(4 !== "4");

console.log(4 < 2);
console.log(2 > 4);

console.log(4 <= 4);
console.log(6 >= 4);

const output = 2 > 4 ? "Hello" : "Hey";
console.log(output);

const output = 6 > 3 ? (true && null ? "Mithun" : console.log(3)) : "Satyam";
console.log(output);
