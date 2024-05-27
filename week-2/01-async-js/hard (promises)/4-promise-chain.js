/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, t1);
  });

}

function wait2(t2) {
   return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, t2);
  });


}

function wait3(t3) {
   return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, t3);
  });


}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return wait1(t1).then(()=> wait2(t2)).then(()=> wait3(t3)).then(()=>{
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    return timeTaken;
  });

}
calculateTime(1000, 2000,3000).then((timeTaken)=>{
  console.log(`Time taken : ${timeTaken} ms`)
})

module.exports = calculateTime;
