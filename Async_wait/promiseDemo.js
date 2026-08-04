 function getUserData() {

    return new Promise((resolve , reject)=>
    {

    
    setTimeout(()=>{
        const data = { name : 'Rohit' , rollNo : '01'};
        resolve(data);

    }, 2000);
  
    });
   
}

console.log("starting fetching user data ...");

getUserData()
.then((data) => {
    console.log("User data fetching "+"Name="+data.name);
    console.log("User data fetching "+"Roll_No="+data.rollNo);
    
    

})
.catch((error)=>{
    console.log("Error User data fetching "+ error);
    
});
