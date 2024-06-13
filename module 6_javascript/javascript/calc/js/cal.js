//create a function for clear result values
function clr()
{
    document.getElementById("result").value="";
}

//backspace in result
function bckResult()
{
    let bck=document.getElementById("result").value;
    let slicebck=bck.slice(0,-1);
    document.getElementById("result").value=slicebck;
}

//to display a button values
function getValues(val)
{
    document.getElementById("result").value+=val;
}

//a function performs all airthmatic expressions
function finalResult()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}

//create a function for square a numbers
function sqResult()
{
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}

//create a function for square root a numbers
function sqrtResult()
{
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}