## Counter without setInterval

let counter = 0;

function updateCounter() {
counter++; 
console.log(`counter: ${counter}`); 

setTimeout(updateCounter, 1000);
}

updateCounter();










































































(Hint: setTimeout)
