var fName = "Utkarsh"
var lName = "Gupta"

console.log(fName+lName)
// creating an element
const el = document.createElement('h2');


// changing the innerHTML
el.innerHTML = fName+" "+lName;


// append in another element
const body = document.body;
body.append(el)

const array = [
    {
        name:"Ramitha",
        city:"Hyderabad"
    },
    {
        name:"Nithya",
        city:"Jaipur"
    },
    {
        name:"Satyam",
        city:"Kashmir"
    },
    {
        name:"Ayush",
        city:"Delhi"
    },
    {
        name:"Dhanjyoti",
        city:"Assam"
    },
    
]

const list = document.createElement('ul');

array.forEach((item)=>{

    const li = document.createElement('li');
    li.innerHTML = item.name;

    list.append(li)
    
})



const listItem = document.getElementsByTagName('li')
console.log(listItem)

const paraElements = document.getElementsByClassName('para')
console.log(paraElements)


const box = document.getElementById('box')
box.append(list)



const heading = document.querySelector('.container h3')

heading.innerHTML = "Satyam is a good actor"
// heading.classList.add('li-paint')


const para2 = document.querySelectorAll('.container .para-2')

para2.forEach((para)=>{
    para.style.backgroundColor ="red"
})


const listItems = document.querySelectorAll('.container ul>.list-item')

listItems.forEach((li,index)=>{
    if(index%2===0){
        console.log(li.classList)
         li.classList.add("li-paint")
    }
    if(index===2){
        li.classList.remove('li-paint')
    }
})

heading.remove()
// 


const images = document.querySelectorAll('.container img')

images.forEach((img,index)=>{
    img.setAttribute('src',`https://xsgames.co/randomusers/assets/avatars/male/${index+1}.jpg`)
})
















