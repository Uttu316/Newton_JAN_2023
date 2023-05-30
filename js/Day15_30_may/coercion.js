//  Boolean
// String
// Number


//  implicit type conversion
// explicit type conversion
const s = (2+"5")
console.log(typeof s)


const x = 7;
const y = '23'
const t = String(7)+ Number(y)

console.log(t)



// Numbers -> String
const x = 234;
console.log(String(x))
console.log(2+'3')
const str = "432"
const n = parseInt(str)
console.log(typeof n)
const fstr = "432.43"
const f = parseFloat(fstr)
console.log(f)
const num = 432
const ns = num.toString()
console.log(ns)


// Number -> Boolean
const age =  24;
console.log(Boolean(age))
console.log(Boolean(-1))
// Falsy
// 0,null,undefined,"",NaN,false
// truthy
// rest of other values are truthy



// String -> Boolean
console.log(Boolean(""))
console.log(Boolean("abc"))

// Sting -> Number

console.log(Number('342')+Number('3'))
const y = +'54' 
console.log(typeof y)
// NaN
console.log(Number('axyz'))
console.log(0/0)
console.log(Number(undefined))
console.log(Number({}))
console.log(isNaN(0))








