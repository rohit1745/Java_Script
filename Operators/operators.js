var a=20 , b=2


//===========Arithmetic operator===============
console.log(a*b);
console.log(a-b);
console.log(a%b);
console.log(a+b);
console.log(a**b);  //==> exponent a^b=(2^2)


console.log('==================================================');


//==========Assignment Operator===============

var p=10;
p = 100;
//p+=2    //10+2=12
//p-=2      //10-2=8
//p/=5      //10/2=5
p%=2

console.log(p);


console.log('==================================================');


//========Comparison Operator==========


console.log(10 == '10');
console.log(10 == '10');
console.log(10 > 4);
console.log(10 < 4);
console.log(10 <= 9);
console.log(10 >= 9);


console.log('==================================================');

//=====Logical Operator=======


let name='Rohit'
let isLogginIn= true
let isPaid = false

if(isLogginIn && isPaid)
{
    console.log('Access to all content');
    
}
else
{
    console.log('Access olny limited content');
    
}


console.log('==================================================');
//=====Unary Operator=======
let z=100
console.log(z++);
console.log(z--);
console.log(typeof z);
console.log(! z++);




console.log('==================================================');
//=====Tarnary Operator=======


let age=18;
let goVot=(age<=10) ? "true" : "false"
console.log(goVot);


console.log('==================================================');

//=====String Concatination =======
let FName = "Rohit"
let LName = "Badgujar"
console.log(FName + " " + LName);

let s = `Hello ${FName} ${LName} Welcome to the Nashik City`;
console.log(s);

