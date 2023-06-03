
let x = Number(prompt('Enter x'))
let y = Number(prompt('Enter y'))
let op = prompt('Enter operation');

switch(op){
  case "+":{
    console.log(x+y)
    break
  }
   case"-":{
     console.log(x-y)
    break
   }
  case"*":{
     console.log(x*y)
    break
   }
   case"/":{
     console.log(x/y)
    break
   }
  default:{
    console.log('Enter valid operator')
  }
}