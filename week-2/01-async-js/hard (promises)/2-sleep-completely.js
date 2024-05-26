/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) =>{
    const startTime= Date.now();
    if(Date.now-startTime < milliseconds){
      
    }
    resolve(`Waiting completed after ${milliseconds} milliseconds`);
  });
}

sleep(7).then((result) =>{
  console.log(result);
});

module.exports = sleep;
