function makeCar(name, wheelCount) {
  let car = {
    name: name,
    type: "Car",
    wheelCount: wheelCount,
    __proto__: vehicle,
  };
  return car;
}

function makeBike(name, wheelCount) {
  let bike = {
    name: name,
    type: "Bike",
    wheelCount: wheelCount,
    __proto__: vehicle,
  };
  return bike;
}
