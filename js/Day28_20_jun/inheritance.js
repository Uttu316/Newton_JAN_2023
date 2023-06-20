// inheritance

class Mother {
  constructor(x) {
    this.voice = "low";
    this.skills = ["Art", "Craft", "intelligence"];
  }
}

class Father extends Mother {
  constructor(x) {
    super(x);
    this.skinColor = "brown";
    this.eyeColor = "black";
    this.language = "hindi";
    this.lastname = "gupta";
  }
  getEye() {
    return this.eyeColor;
  }
  speak() {
    console.log(`I speak ${this.language}`);
  }
}

class Child extends Father {
  constructor(x) {
    super(x);
    this.firstname = "Utkarsh";
    this.age = 24;
  }

  customEye() {
    let eye = super.getEye();
    console.log(`My eye color is ${eye}`);
  }
}

const c = new Child("abc");

console.log(c);
c.speak();
c.customEye();
