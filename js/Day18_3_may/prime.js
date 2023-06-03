// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
      // Your code here
      let count = 0
      let arr = new Array(N+1)
      for(let i=0 ; i<=N ; i++){
          arr[i] = 1
      }
      arr[0]=0
      arr[1]=0
      for(let i=2;i*i<=N ; i++){
          if(arr[i]==1){
              for(let j=i*i ; j<=N ; j+=i){
                  arr[j]=0;
              }
          }
      }
      for(let i=2 ; i<=N ;i++){
          if(arr[i]==1){
              count++;
          }
      }
      return count
 }