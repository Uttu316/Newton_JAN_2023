
function User(name,age,position){
    this.name = name;
    this.age= age;
    this.position=position;
    this.leaves =[];
}

User.prototype.applyLeave  = function(from,to){
console.log(from,to)
}
const users = [
{
    name:'Parag',
    age:22,
    position:'Manager'
},
{
    name:'Ramitha',
    age:21,
    position:'SDE'
},
{
    name:'Mithun',
    age:23,
    position:'SSDE'
},
{
    name:'Nithiya',
    age:20,
    position:'intern'
},
]

for(let i of users){
const user = new User(i.name,i.age,i.position);
console.log(user)
// user.applyLeave('06-12-2023','06-15-2023')
}