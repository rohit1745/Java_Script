
//============Function Declaratoin===========

const { useCallback } = require("react");

function Hii()
{
    console.log("HEllo Buddy");
    
}
Hii()


//============Function Expression===========

const hello = function()
{
    console.log("Hello Boy's.....");

    
}
hello();


//============arrow function===========

// ===========1st type ==========
const sum= (a , b)=>{   // parameter
return a-b;
}
console.log(sum(20,10));

//================ 2nd type ============
const sq=(s) => s * s   //argument
console.log(sq(5));



//==============default parameter==========

function N(name='Prasad')
{
    console.log("Hello " +name);
    
}
N('Rohit');
N();


//==============Function Scope==========

function cityName()
{
    let city="Nashik"
    console.log("city Name= "+city);
    
}
cityName();
//console.log(city);  //you cant not declare out side the function 



//========call back Function ==========

function hii(name)
{
    console.log("HEllo ${name} wellcome to the coffee shop");
    
}


//direct calling
function getCustomerMsg(Callback)
{
    const name="Raj";
    Callback(name);
}
getCustomerMsg(hii);