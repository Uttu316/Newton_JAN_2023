console.log("heyy");
setTimeout(() => {
  console.log("Async");
}, 1000);
console.log("Hello");

console.log("heyy");
setTimeout(() => {
  console.log("Async");
}, 0);
console.log("Hello");

console.log("heyy");
let x = 0;
const intervalId = setInterval(() => {
  console.log(x++);
  if (x === 6) {
    clearInterval(intervalId);
  }
}, 1000);

console.log("Hello");
