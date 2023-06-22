//call apply and bind
const obj = {
    name:"Utkarsh",
    getName:function(){
        console.log(this.name)
    },
    age:24
}

const obj2 = {
    name:"Satyam",
    getAge:function(x,y){
        console.log(this.age+x+y)
    }
}

obj.getName.call(obj2)
obj2.getAge.call(obj,2,3)
 obj2.getAge.apply(obj,[2,3])


 //call apply and bind
 const user = {
    name:"Utkarsh",
    getName:function(){
        console.log(this.name)
    },
    age:24
}

const user2 = {
    name:"Satyam",
    getAge:function(x,y){
        console.log(this.age+x+y)
    }
}
const getName = user.getName.bind(user2);

const getAge = user2.getAge.bind(user)

getName();
getAge(4,5)


