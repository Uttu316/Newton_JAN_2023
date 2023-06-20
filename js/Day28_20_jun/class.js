const user  ={
    name:'Utkarsh',
    age:24,
    city:'Agra'
}


function User(name,age,city){
    this.name = name
    this.age = age
    this.city = city
    
    
}


User.prototype.getInfo = function(){
    console.log(`${this.name} ${this.age} ${this.city}`)
    
}



const u1 = new User('Utkarsh',24,'Agra')


// ES6
class User2{
    constructor(name,age,city){
        this.name = name
        this.age = age
        this.city = city
    }
    getInfo(){
    console.log(`${this.name} ${this.age} ${this.city}`)
    }
}


const u2 = new User2('Parag',22,'Lucknow')
