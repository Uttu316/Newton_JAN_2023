// Spread Operator

const obj = {
    name:'Parag',
    age:22,
    city:'Lucknow',
    hasGF:false,
    address:{
      pincode:424234,
    }
  }
  
  
  const obj2 ={marks:200,...obj,country:"india"}
  
  // a new object with new refrence
  obj2.name = "Satyam"
  
  
  // pointing to same refrence of obj.address
  obj2.address.pincode = 111111
  
  console.log(obj2,obj)


  const arr = [1,2,3,4,5,6]


const newArr = [...arr,-1,-2];


newArr[2] ="Owl";


console.log(newArr,arr)


// Rest Operator


const user = {
    name:'Ramitha',
    phone:98765432,
    gender:'Female',
    dob:"1999",
    address:{
     city:"Pune",
     country:"In",
     pincode:323232,
     state:'Maharastra',
      district:{
        districtId:432342,
        policeStation:"Main Road"
      }
    }
  }
  
  const city = "Agra";
  
  // destructuring
  const {
     dob,
     phone=1111111,
     address:{
    city:userCity,
       pincode,
    district, 
    district:{
      policeStation
    }={}
  }} = user;
  
  console.log(phone,dob,city,userCity,pincode,district,policeStation,user)
  
  
  
  const {name,...rest} = user;

console.log(phone,name,rest)

// Rest Operator
const array = ["Ajay","Vijay","Shyam","Ramitha","Nithya","Sikha","Kunal"];


const [x,y,z="Ram",...restArr] = array;

console.log(x,y,z,restArr)

function abc(...args){
    console.log(args)
}


abc(1,2,3,32,2,434,2)