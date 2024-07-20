let display = document.querySelector(".display");
let dispArr = [0, 0, 0, 0, 0, 0, 0, 0];
let num1 = 0;
let num2 = 0;
const btnNum = document.querySelectorAll(".calcBtn");
let operand = ''

function updateDisplay(val) {
    dispArr.shift();
    dispArr.push(val);
    display.textContent = dispArr.join("");
};
function clearDisplay() {
    dispArr = [0, 0, 0, 0, 0, 0, 0, 0];
    display.textContent = dispArr.join("");
}
function reset(){
    num1=0;
    num2=0;
    operand='';
    clearDisplay();
}
function dispToNum() {
    if(operand==''){
        num1 = Number(dispArr.join(""));
    } else{
        num2 = Number(dispArr.join(""));
    }
    clearDisplay();
};
function result(val){
    dispArr.textContent=val;
};

function operate(op,num1,num2){
    let answer=0;
    if(operand=='+'){
        answer=num1+num2;
    }
    else if(operand=='-'){
        answer=num1-num2;
    }
    else if(operand=='x'){
        answer=num1*num2;
    }
    else if(operand=='/'){
        answer=num1/num2;
    }
    else if(operand=='='){
        
    }
    result(answer);
};
btnNum.forEach(btn => {
    btn.addEventListener("click", event => {
        if (btn.classList.contains('clear')) {
            clearDisplay();
        }
        else if (btn.classList.contains("num")) {
            updateDisplay(btn.textContent);
        }
        else if (btn.classList.contains("operand")) {
            //push current display of digits to num1
            dispToNum();
            operand=btn.textContent;
            if(btn.textContent=='='){
                operate(operand,num1,num2);
            }
        }
        console.log(num1);
        console.log(num2);
        console.log(operand);
    })
});