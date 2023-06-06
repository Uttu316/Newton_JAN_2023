var array = [1,2,3,4,5,6];


console.log(array[2])
const n = array.length
console.log(array[n-1])

const el = array.at(-3)
console.log(el)

const arr1 = ["Satyam","Nitya"]

const arr2 = ["Parag","Mithun"]

const newArray = arr2.concat(arr1)

console.log(newArray)


const isPresent =  newArray.includes('Ramitha');

console.log(isPresent)


const joinedValues = array.join('-')

console.log(joinedValues)

array.push(-1)

console.log(array)
array.pop()

console.log(array)

array.unshift(-3)
console.log(array)

array.shift()
array.shift()
console.log(array)
const reversedArray = array.reverse()

console.log(reversedArray)


const subArray = array.slice(1,4)
console.log(subArray)


function arrayProperties(arr1, arr2) {
    let arr3 = arr2.concat(arr1);
    arr3.push(arr2);
    console.log(arr3);
  
    arr3.pop();
    console.log(arr3.reverse());
  
    let orangeIndex = arr3.lastIndexOf("orange");
    console.log(orangeIndex);
  
    let slicedArr3 = arr3.slice(0, 3);
    console.log(slicedArr3.length);
    let arrayText = slicedArr3.join();
    console.log(arrayText);
  }

  function takeMultipleNumbersAndAdd (){
    // write your code here

    // return the output using return keyword
    // do not console.log it
    let sum=0;

    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum

}