function pritNumbers(x){
    console.log(x)
    if(x>0){
      pritNumbers(--x)
    }
  }
  
  
  pritNumbers(10)

  function factorial(x){
  
    if(x==0){
      return 1
    }
    
    return x*factorial(x-1)
  }
  
  const result =  factorial(4)
  console.log(result)

  const getValue = (num) => {
    
    let s= num; //15
    num = 0
    
    while(s>0){
        var r = s%10;
        s =  parseInt(s/10)
        num  = num+r
    }

    if(num<10){
        return num
    }else{
        return getValue(num) //15;
    }
    
};