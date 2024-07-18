/*
--1--
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, 
so start by creating functions for the following items and testing them in your browser’s console.
-  add
-  subtract
-  multiply
-  divide
*/

console.log('cats');
let operan = ''
let num1 = 0;
let num2 = 0;
const btnNum = document.querySelectorAll(".num");
//const btnNum = document.querySelectorAll("button[type='num']");
let display = document.querySelector(".display");
display.textContent='123';
console.log('dogs');
// function operate(operand,num1,num2){
//     if(operand=='+'){
//         return num1+num2;
//     }
//     else if(operand=='-'){
//         return num1-num2;
//     }
//     else if(operand=='*'){
//         return num1*num2;
//     }
//     else if(operand=='/'){
//         return num1/num2;
//     }
// };

// btnNum.forEach((digit)=>{
//     digit.addEventListener("click",event => {

//     })
// });