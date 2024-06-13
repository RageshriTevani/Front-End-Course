// foreach is used to return any array in listing

var emp=["rageshri, isha, jennifer, monica, siya"]

// console.log(emp);

//emp.forEach(callBackfunction);
emp.forEach(display);
function display(item)
{
    console.log("Name of employee is :"+item)
}