async function wait() {
    console.log("Wait for 3 sec");
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    console.log("Done for wait");
    
        
}
console.log("Start for waiting");  //main thread start here
wait();
console.log("Process complete");

