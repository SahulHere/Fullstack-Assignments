## Create a counter in JavaScript
//initializing the counter
let counter = 0;

//function to update the counter
function updateCounter(){
counter++;
console.log(`counter: ${counter}`);
}

//calling the update function every second
setInterval(updateCounter, 1000);
