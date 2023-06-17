const obj = {
    name:'Utkarsh',
    age:32,
}

const keys = Object.keys(obj)

console.log(keys.length)
const values = Object.values(obj)

console.log(values)

for(let key in obj){
    console.log(key,obj[key])
}

for(let [k,v] of Object.entries(obj)){
    console.log(k,v)
}

let user = {
    name:'Utkarsh',
    age:32,
}


function getValue(key){
    return user[key]
}

function setValue(key,value){
    user ={...user,[key]:value}
}




const value = getValue('name')
setValue('age',43)
setValue('name',"Shilpa")
console.log(user)

delete obj.name


// custom object
function User(name,age){
    this.name = name;
    this.age = age
}
User.prototype.getName  =function(){
        console.log(this.name)
}
const u1 = new  User('Utkarsh',23)
const u2 = new  User('Shreya',24)
const u3 = new  User('Suman',32)
const u4 = new  User('Nitin',12)


console.log(u1)
console.log(u2)
console.log(u3)
console.log(u4)


