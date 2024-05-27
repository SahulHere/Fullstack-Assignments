/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(time){
   return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, time);
  });
}

function wait1(t1) {
 
 return delay(t1);
}

function wait2(t2) {
 
 return delay(t2);
}

function wait3(t3) {
 
 return delay(t3);
}

function calculateTime(t1, t2, t3) {
  startTime= Date.now();

  return wait1().then(()=>{
    wait2()
  }).then(()=>{
    wait3()
  }).then(()=>{
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    return timeTaken;
  })

}
calculateTime(1000, 2000, 5000).then((timeTaken)=>{
    console.log(`Total time taken: ${timeTaken} milliseconds`)
  });

module.exports = calculateTime;
