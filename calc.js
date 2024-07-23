let display = document.querySelector(".display");
let dispArr = [0, 0, 0, 0, 0, 0, 0, 0];
let num1 = 0;
let num2 = 0;
const btnNum = document.querySelectorAll(".calcBtn");
let operand = ''

function updateDisplay(val) {
    // Convert val to a string and split into an array of characters
    let valArr = val.toString().split("");

    // Remove elements from dispArr and add the new values
    dispArr = dispArr.slice(valArr.length);  // Remove the same number of elements from the start
    dispArr = dispArr.concat(valArr);  // Add the new values to the end

    // Update the display content
    display.textContent = dispArr.join("");
}
function clearDisplay() {
    dispArr = [0, 0, 0, 0, 0, 0, 0, 0];
    display.textContent = dispArr.join("");
}
function reset() {
    num1 = 0;
    num2 = 0;
    operand = '';
    clearDisplay();
}
function dispToNum() {
    if (operand == '') {
        console.log(`dispToNum: ${operand}; ${num1}; ${num2}`);
        num1 = Number(dispArr.join(""));
    } else {
        num2 = Number(dispArr.join(""));
    }
    clearDisplay();
};
function result(val) {
    reset();
    updateDisplay(val);
};

//00000000
//000000066

function operate(op, num1, num2) {
    console.log(`Func operate ${op}   ${num1}    ${num2}`);
    let answer = 0;
    if (operand == '+') {
        console.log('+');
        answer = num1 + num2;
    }
    else if (operand == '-') {
        console.log('-');
        answer = num1 - num2;
    }
    else if (operand == 'x') {
        console.log('x');
        answer = num1 * num2;
    }
    else if (operand == '/') {
        console.log('/');
        answer = num1 / num2;
    }
    console.log('This is the answer:' + answer);
    result(answer.toString().split())
}
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
            console.log(`Operand:${operand}`);
            dispToNum();
            operand = btn.textContent;
        }
        else if (btn.classList.contains("equal")) {
            dispToNum();
            operate(operand, num1, num2);
        }
        console.log(`num1:${num1}`);
        console.log(`num2:${num2}`);
        console.log(`operand:${operand}`);
    })
});

//console.log(`Operand: ${operand}`);
// if(btn.textContent=='='){
//     console.log(`Result     ${operand}    ${num1}    ${num2}`);

// }