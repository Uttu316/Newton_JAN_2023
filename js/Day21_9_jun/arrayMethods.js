var array = [1, 2, 3, 4];

// for(let i=0;i<array.length;i++){
//   console.log(array[i])
// }
// for(let i of array){
//   console.log(i)
// }

const users = [
  {
    name: "Parag",
    city: "Lucknow",
  },
  {
    name: "Satyam",
    city: "Mathura",
  },
  {
    name: "Ramitha",
    city: "Hyderabad",
  },
  {
    name: "Mahendra",
    city: "Jammu",
  },
];

users.forEach((item, index) => {
  console.log(item.city, index);
});

const names = users.map((item, index) => [index, item.name]);

console.log(names);

const city = prompt("Enter a city");

const foundPerson = users.find((item) => {
  return item.city.toLowerCase() === city.toLowerCase();
});
console.log(foundPerson);
if (foundPerson) {
  console.log("Hurray we found the person");
} else {
  console.log("oops didn't find");
}

const foundPersonIndex = users.findIndex((item) => {
  return item.city.toLowerCase() === city.toLowerCase();
});
console.log(foundPersonIndex);
if (foundPersonIndex != -1) {
  console.log("Hurray we found");
} else {
  console.log("oops didn't find");
}

const age = prompt("Enter age");

const filteredArray = users.filter((i) => {
  return i.age >= age;
});

console.log(filteredArray);

let sumOfAges = 0;
for (let i = 0; i < users.length; i++) {
  sumOfAges += users[i].age;
}
console.log(sumOfAges);

const totalAge = users.reduce((acc, item) => {
  console.log(acc, item);
  return acc + item.age;
}, 0);

const mathuraAudience = users.reduce((acc, item) => {
  if (item.city.toLowerCase() === "mathura") {
    return acc + 1;
  }
  return acc;
}, 0);

const isAnyEligible = users.some((item) => {
  console.log(item);
  return item.age >= 18;
});

const isAllEligible = users.every((item) => {
  console.log(item);
  return item.age >= 18;
});

console.log(isAllEligible);

console.log(mathuraAudience);


const numbers =[4,5,6,1,2,7,3,11,7];

const comparator =(b,a)=>{
    if(b>a){
        return 1
    }
    return -1
}

const sortedNumbers = numbers.sort(comparator)

console.log(sortedNumbers)