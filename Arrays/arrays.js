const arr = ['Rohit','Prasad','Chandu']

//print
console.log(arr);

//access element
console.log(arr[1]);

//update element
console.log();

//replace element
arr[1]='Pashya';
console.log(arr);


//indexing
console.log(arr.length);

//splice ==>remove , replace and add
console.log(arr.splice());
console.log(arr[2]);
console.log(arr[0]);


console.log("==========loop=============");


//for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
     
    
}


console.log('=================================');


//for each loop
arr.forEach((arr) => {
    console.log(arr);
    
    
});

