

function A(){
    this.x = 1;
    this.y= 2;
    this.z = 3;
    
  //   private variable
    let salary;
    
    let calculateSlary = function(){
         salary = this.x+this.y+this.z;
        return salary
    }
    this.getSum= function(){
      return calculateSlary.call(this)
    }
    
    
   
  }
  
  const a = new A()
  
  console.log(a.x)
  console.log(a.y)
  a.salary=23232
  console.log(a.z)
  
  
  
  console.log(a.getSum())