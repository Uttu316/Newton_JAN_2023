let show = function() {
    console.log('Anonymous function');
};
// ES6
// Arrow function 

let arrow_function =()=>{
  console.log('Hey I am Arrow function') 
  return  3;
}

const op= arrow_function()
console.log(op)



const mul = (a,b)=>(a*b)
const mm= mul(4,2)
console.log(mm)






const isEligibletoMarry =(user)=>(user.age>21)


const obj = {
    name:"Satyam",
    age:24
}
const allowed = isEligibletoMarry(obj)
console.log(allowed)


// function addValues(){
//     console.log(arguments)
//     let sum = 0;
//     for(let i =0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
// addValues()

const showName = (fName,lName)=>{
    console.log(arguments)
    console.log(fName,lName)
}
showName()

function abc(){
    console.log(this) 
}

//global scope
// abc()
// window


const  arrow = ()=>{
    console.log(this)
}
// this keyword inside arrow fn depends on its non arrow parent function (this keyword)

arrow()


const user = {
  name:"Satyam",
  age:23,
  getName:function(){
    console.log(this.name)
  },
  getAge:function(){
    console.log(this)
    const printAge = ()=>{
      console.log(this.age)
    }
    printAge()
  }
  
}
user.getAge()








function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}


function callbackFunction(){
    console.log('I am  a callback function');
}
higherOrderFunction(callbackFunction)







function addLastName(func,lastName =" Gupta"){
   
    const suggestedNames =func();
    const random = parseInt(Math.random()*10)%suggestedNames.length
    console.log(random)
    const finalName = random<suggestedNames.length?suggestedNames[random]:suggestedNames[0]
    return finalName+lastName;
  }
  
  
  function giveName(){
    const names = ["Aryan","Satyam","Parag","Ayush"]
    
    return names
  }
  const name =  addLastName(giveName);
  
  console.log(name)
