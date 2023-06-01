const array = ["Satyam","Parag","nithya","Vedanth"]
const bikes = [
  {
    name:"Honda",
    engine:200
  },
  {
    name:"Suzuki",
    engine:250
  },
  {
    name:"Yamaha",
    engine:300
  },
]

console.log(array)
console.log(array[0])
console.log(array[2])

const size = array.length;

console.log(array[size-1])


for(let i=0;i<size;i++){
const ele =   array[i]
  console.log(ele)
}

// for of
for(let ele of bikes){
  console.log(ele.name)
}

const obj ={
  pincode:32323,
  city:"Agra",
  state:"UP",
  country:'India'
}

// for in
for(let key in obj){
  const value = obj[key];
  console.log(key,value)
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matrix[2][2])

for(let i=0;i<matrix.length;i++){
  
  for(let j = 0;j<matrix[i].length;j++){
    if(i==j){
      console.log(i+" "+j,matrix[i][j])
    }
  }
}

