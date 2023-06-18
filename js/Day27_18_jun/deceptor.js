const obj = {
  name: "utkarsh",
};

console.log(obj.name);
obj.name = "Parag";
console.log(obj.name);

let v = 23;
Object.defineProperty(obj, "age", {
  //   value:23,
  //   writable:false
  get: function () {
    return v;
  },
  set: function (newValue) {
    v = newValue + 32;
  },
});

console.log(obj.age);

obj.age = 24;

console.log(obj.age);

const d = Object.getOwnPropertyDescriptor(obj, "name");

console.log(d);
