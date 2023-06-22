function Animal(){
    this.name = "Hello"
}


function Dog() {
    Animal.call(this)
    this.lang = "bow"
}


const d = new Dog()

console.log(d.name)