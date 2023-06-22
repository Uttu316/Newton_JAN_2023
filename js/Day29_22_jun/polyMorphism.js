

class Mammal{
    constructor(lang,category,iswild){
        this.lang = lang;
        this.category =category;
        this.wild=iswild
    }
    walk(){
        console.log(`${this.category} can walk`)
    }
    speak(){
         console.log(`${this.category} can speak ${this.lang}`)
    }
}


class Dog extends Mammal{
    constructor(sniffingPower){
        super('bow','Dog',false);
        this.tail=true;
        this.sniffing=sniffingPower
    }
    
}
class Cat extends Mammal{
    constructor(sniffingPower){
        super('meow','Cat',false);
        this.tail=true;
        this.sniffing=sniffingPower
    }
    
}
class Whale extends Mammal{
    constructor(size){
        super('sonar','Whale',true);
        this.fins=4
        this.weight =size;
    }
   walk(){
       console.log(`${this.category} can swim`)
   } 
   
   speak(){
       super.speak()
       console.log('I use sonar signal to speak')
   }
}


const c1 = new Cat('Good')
const d1 = new Dog('Best')
const w1 = new Whale('Best')
d1.walk()
c1.walk()
w1.walk()
w1.speak()
function abc(x,y){
    console.log(x,y)
}


function abc(x){
    console.log(x)
}

abc(2,3)