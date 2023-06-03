function findTax(salary) {
    let tax = 0;
  
    try {
      if (salary>0) { 
          if (salary > 0 && salary <= 500000) {
            tax = 0;
          } else if (salary > 500000 && salary <= 1000000) {
            tax = 10;
          } else if (salary > 1000000 && salary <= 1500000) {
            tax = 20;
          } else {
            tax = 30;
          }
          
        }else{
            throw "Salary not Valid"
        }
    } catch (e) {
      return e;
    }
  
     const total = (salary*tax/100)
  
    return total
  }
  
  
  const answer =findTax(1600000)
  console.log(answer)