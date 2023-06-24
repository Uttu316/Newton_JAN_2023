class User {
  constructor(name) {
    this.name = name;
    this._age = 0;
  }

  get age() {
    return this._age;
  }
  //   set age(newAge){

  //     this._age = newAge
  //   }
}

const u = new User("Ajay");

u.age = 40;

console.log(u.age);
