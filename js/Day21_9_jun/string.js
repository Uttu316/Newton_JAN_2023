let fName = "Utkarsrh";

let lName = "Gupta"

const fullName = fName.concat(" ",lName)

console.log(fullName)
console.log(fullName.includes('a'))

const msg = "    hello    Welcome  ";

console.log(msg.trimLeft())

console.log(lName.toUpperCase())

console.log(fName.replace('r','*'))
console.log(fName.replaceAll('r','*'))

console.log(fName.charCodeAt(3))


// ES6
// template strings

let str = `${fName} ${lName}`

console.log(str)


