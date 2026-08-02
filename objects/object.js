const student = 
{
    name : 'Rohit',
    Roll_No : '01',
    city :'Nashik',
    age : 21

};
console.log(student.name);   //access to dot (.) notation
console.log(student['age'])  // braket notation

student.name= "Shubham";   //updating
console.log(student.name);

student.class ="BE";     //adding
console.log(student.class);

delete student.name;      //Deleting
console.log(student.name);



const employee =
{
    name : "Raj",
    Emp_ID : 100,
    address : {
        city : "Deur",
        Tel : "Shahada",
        Dist : "Nandurabr"

    }
}

console.log('==========================================================');

console.log(employee.name);
console.log(employee.address.Dist);

 