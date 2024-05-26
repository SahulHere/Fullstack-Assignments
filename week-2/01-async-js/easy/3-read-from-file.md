## Reading the contents of a file

const fs= require('fs');
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log("File contents: " +data);
    
});

function sum(n){
let ans=0;
 for(let i=0;i<=n; i++){
 ans+=i;
 }
 return ans;
 }
 console.log(sum(1000));
 console.log(sum(1000000));

