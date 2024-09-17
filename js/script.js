//alert("hii welcome to js")
console.log(1246);
console.log(567.78);
console.log("hello world");
console.log(true);
console.error("this page is error");
console.warn("this page is error");
console.log({fname:"durga",lname:"shree",age:26});
console.table({fname:"durga",lname:"shree",age:26});
console.log([2,5,67,87,99]);
console.clear();
console.time("timer")
for(i=1;i<10;i++)
{
    console.log(i);
}
console.timeEnd("timer")



//var
//let
//const
var num = 10;
num = 15;
console.log(num)
var num = 28;
console.log(num)
let a = 5;
a=10;
console.log(a)
const b = 10;
// b=16;
// console.log(a)
// const b = 10;

//scope
console.log(a)
console.clear();

// if(true)
// {
//     const meg="hello"
//     console.log(meg)
// }
// console.log(meg)
console.clear()
//math fun
let c ;
c=Math.PI;
console.log(c);
c=Math.round(5.7);
console.log(c);
c=Math.floor(30);
console.log(c);
c=Math.ceil(5);
console.log(c);
c=Math.sqrt(5,2);
console.log(c);
c=Math.pow(5,7);
console.log(c);
c=Math.min(57,10,45,100);
console.log(c);
c=Math.max(57,10,20,30,400);
console.log(c);
c=Math.sin(5);
console.log(c);
c=Math.random();
console.log(c);
c=Math.floor((Math.random()*50+1));
console.log(c);
c=Math.log(10);
console.log(c);
c=Math.sin(8);
console.log(c);
c=Math.cos(10);
console.log(c);
c=Math.tan(5.7);
console.log(Math.abs(-57));

// String
// Number
// Boolean
// null
undefined
// symbols E6

// Array
// Object
// date
const s1=Symbol()
console.log(s1)
const s2=Symbol()
console.log(s2)
console.log(s1==s2)


//type conversion
let x;
x=15.27
console.log(x,typeof x)
 x= String(x);
 console.log(x,typeof x)
let y;
y="189.67"
console.log(y,typeof y)
y= String(y);
console.log(y,typeof y)
let z;
z=[5,7,8,9,7]
console.log(z,typeof z)

//operations

var num1= 10;
var num2= 25;
var sum = num1*num2
console.log(num1==num2)
console.log(sum)
var num1= 10;
var num2 =25;
sum = num2 =+ num1;
console.log(num2)
console.log(sum)
console.clear()

//if cond
var age = 20;
if(age == 18)
{
    console.log("equal")
}
else if(age<=18)
{
    console.log(" lessthan equal to")
}
else
{
    console.log(" above ")
}
let number = prompt("enter the number : ")
if(number%2==0)
{
    console.log("even number")

}
else{
    console.log("odd number")
}

//case
var day=1;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wesday");
        break;
    // more cases
    default:
        console.log("Invalid day");
}
//looping
var i=0;
while(i<=10)
{
    i++;
    console.log(i)
}
//do while
var j=1
do {
    console.log(j)
    j++;
}
while(j<7)
    //for loop
   for(i=1;i<=6;i++); 
   {
    console.log(i)
   }

    


