let cart=['shirt','T-shirt','jeens','cap','shoes'];

console.log('available item='+cart);

console.log('------------------------------------------');

//removing item

let popItem =cart.pop()
console.log("removing item="+ popItem);
console.log('available item='+cart);


cart.forEach((item , index ) => {

    console.log(`${index} == ${item}`);
    
    
});


