
//Functions



//ES5 Functions 

//Normal Function
function print(name)
{
    console.log("Hello = " + name);
    
    
}
 var res = print("Rohit")
 

//Function Expression 
 function print(name)
{
    console.log("Hello = " + name);
    //return "hello ji"   //==undefined
    
}
 var res = print("Rohit")
 console.log(res);
  

 
//Function Expression 
var r=function()
{
    console.log("Rohit");
    
}
r();





//ES6 Function

//Basic fat arrow function 

var fun=()=>{
    console.log("Hiiiiiiiiiiii");
    
}
fun();


//Basic fat with one parameter

var fun=(a)=>
{
    console.log("Hello = "+a);
    
}
fun("Rohit");


// fat arrow with implicit return
var fun=(a)=>
{
    console.log("Hello = "+a);
    return "Hii Man"
    
}
var res=fun("Rohit");

console.log(res);




//Access Element

 var h2=document.querySelector('h2');
 h2.textContent="qqqqqqqqqqqqqqqqqqq";


// var btn = document.querySelector("#btn")
// btn.textContent = "Download Starting";


//Change CSS Element

var h3 = document.querySelector('h3');
h3.innerHTML = "<i>Nashik</i>"  //changed font

var h3 = document.querySelector('h3');
h3.style.color='red'   //changed color
h3.style.backgroundColor='black'  //background color changed

//Add and Remove class of Element

var h1 = document.querySelector('#nmk')
h1.classList.add('apna-css');  //add

var h1 = document.querySelector('#nmk')
h1.classList.remove('apna-css');   //Remove




//Creating and Deleting Element  ==>imp


//creating
var h4= document.createElement('h1')
h4.textContent='SHAHADA';
h4.classList.add("test")

//adding
document.querySelector("body").appendChild(h4);

//Remove
document.querySelector("body").removeChild(h4);


var btn=document.querySelector("button");
btn.addEventListener('dblclick',()=>{
    console.log('Ram Ram');
    
})
