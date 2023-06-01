// literal object
const obj = {
    name:'Utkarsh',
    age:24,
    city:'Agra'
  }
  
  
  // intantiating Object function
  const obj2 = new Object();
  
  obj2.name = "Satyam"
  console.log(obj.name,obj2.name)
  
  
  // create
  const obj3 = Object.create({
    name:"Parag"
  })
  console.log(obj3)


  const car = {
    brand:'Mahindra',
   model:'Thar',
   isConvertible:false,
   isfrontWheelDrive:true,
   dop:"12/03/2023",
   owner:"Showroom",
   price:{
    exShowRoom:"12 Lakhs",
    onRoad:"14Lakhs"
  }
 }
 
 car.isConvertible = true
 
 
 // console.log(car.dop)
 
 
 
 delete car.owner
 
 console.log(car)
 car.mileage = 12
 console.log(car)
 
 const model = car['model'];

console.log(model)

const onRoadPrice = car.price.onRoad;

console.log(onRoadPrice)
 

const allKeys = Object.keys(car)

console.log(allKeys.length) // size of object

const allValues = Object.values(car)

console.log(allValues.length) 


function Car(){
    this.brand = "Mahindra";
    this.model = "Thar";
    this.isConvertible = false;
    this.owner ="Showroom"
  
  }
  
  
  
  const carObj  = new Car();
  
  console.log(carObj)