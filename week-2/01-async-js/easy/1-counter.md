## Create a counter in JavaScript

let counter = 0;


function updateCounter(){
counter++;
console.log(`counter: ${counter}`);
}

setInterval(updateCounter, 1000);
