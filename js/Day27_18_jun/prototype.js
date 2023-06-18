
function Student(){
    this.name = null;
    this.std = null;
    this.section =null;
    this.age =null;
    this.marks = [];
} 
Student.prototype.getTotalMarks= function (){
         //logic of total marks
    }
Student.prototype.addMarks = function(subject,score){
        this.marks.push({
            subject,
            score
        })
}
Student.prototype.setDetails  = function (name,age,std,section){
        this.name = name;
        this.age = age;
        this.std=std;
        this.section= section;
}




const s1 = new Student();
s1.setDetails('Ayush',14,10,'C')
s1.addMarks('Math',44)
console.log(s1)

const s2 = new Student();
s2.setDetails('Mohan',14,10,'D')
s2.addMarks('Science',22)
console.log(s2)


// write your own prototype myMap function

let arr = [1,2,3,4,5]


arr.map((item,index,arrary)=>{
  
})


//prototypical inheritance
Array.prototype.myMap = function(callBack){
  const array = this;
  let newArray =[];
  
  for(let i=0;i<array.length;i++){
    
   let output =  callBack(array[i],i,array)
   newArray.push(output)
  }
  return newArray
}

let newArray = arr.myMap((i,ind,ary)=>{
    return i*ind
})

console.log(newArray)


