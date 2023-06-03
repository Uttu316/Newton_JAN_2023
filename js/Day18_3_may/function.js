function my_fun(x){

    console.log("Here",x)
    x()
    return  function(){
        console.log('Heyyyyyyylo')
    }
    
  }
  
  var value = function(){
      console.log('Heyyy')
  }
  
  const result = my_fun(value)
  
  result()
  
// First class function  