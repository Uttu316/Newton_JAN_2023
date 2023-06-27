// A Promise -> We will go on trip

/*
             //pending
  Promise -> Async(Action) ->resolve()
                           ->reject()
  


  
  promise -> fullfill -> Do Packing
          -> Failure -> Back plan/Breakup

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let money = 1000;
    reject(money);
  }, 4000);
});

promise
  .then((res) => {
    console.log(res, "Packing Start");
  })
  .catch((e) => {
    console.log(e, "Break up");
  });

// A Promise -> We will go on trip

/*
             //pending
  Promise -> Async(Action) ->resolve()
                           ->reject()
  


  
  promise -> fullfill -> Do Packing
          -> Failure -> Back plan/Breakup

*/

const p = new Promise((resolve, reject) => {
  reject(2);
});

p.then((res) => {
  console.log(res);
  return res * 2;
})
  .then((nextValue) => {
    console.log(nextValue);
    return nextValue * 2;
  })
  .then((nextValue) => {
    console.log(nextValue);
  })
  .catch((e) => {
    console.log("error", e);
    return "ERR";
  })
  .catch((e) => {
    console.log(e);
  })
  .then((res) => {
    console.log("then", res);
  });

const p1 = Promise.reject(2);

const p2 = Promise.reject(3);

const allPromises = Promise.all([p1, p2]);

allPromises
  .then((res) => {
    // All promises fullfilled
    console.log(res);
  })
  .catch((err) => {
    // Even one promise failed
    console.log(err);
  })
  .finally(() => {
    console.log("wrewr");
  });

// const allPromises = Promise.allSettled([p1,p2])

// allPromises.then((res)=>{
//    // All promises fullfilled
//   console.log(res)
// }).catch((err)=>{
//   // Even one promise failed
//   console.log(err)
// })

/*
[[object Object] {
  status: "fulfilled",
  value: 2
}, [object Object] {
  reason: 3,
  status: "rejected"
}]


*/

setTimeout(() => {
  console.log("hey");
}, 0);

const _promise = Promise.resolve(3);

_promise.then((res) => {
  console.log(res);
});
