


const body = document.querySelector('body')


body.addEventListener('click',(event)=>{
    console.log('Body Clicked',event)
})


const container1 = document.getElementById('container-1')

container1.addEventListener('click',(e)=>{
    console.log('container1 Clicked',e)
})

const container = document.getElementById('container')

container.addEventListener('click',(e)=>{
    console.log('container Clicked',e)
})

const box = document.getElementById('box')

box.addEventListener('click',(e)=>{
    
    console.log('Box Clicked',e)
})

const btn = document.getElementById('child')



btn.addEventListener('click',(e)=>{
    e.stopImmediatePropagation()
    console.log('Button Clicked',e)
})

btn.addEventListener('click',(e)=>{
    console.log('Button 2 Clicked',e)
})
