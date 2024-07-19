/*
--1--
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, 
so start by creating functions for the following items and testing them in your browser’s console.
-  add
-  subtract
-  multiply
-  divide
*/


let display = document.querySelector(".display");
let dispArr = [0,0,0,0,0,0,0,0];

const btnNum = document.querySelectorAll(".num");
let operan = ''
let num1 = 0;
let num2 = 0;
function updateDisplay(val){
    dispArr.shift();
    dispArr.push(val);
    display.textContent=dispArr.join("");
};
btnNum.forEach(btn => {
    btn.addEventListener("click",event => {
        updateDisplay(btn.textContent);
    })
});




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