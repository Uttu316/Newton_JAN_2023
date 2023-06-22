function setPrototype() {
    Object.assign(User.prototype, sayHiMixin);
}

let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

    say() {
        // call parent method
        return super.say(`${this.name}`); // (*)
    },
};