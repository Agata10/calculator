let firstNum = null;
let secondNum = null;
let operator = null;
let result = null;

const buttonsNum = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const displayInput = document.querySelector(".display-input");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");



function clear() {
    displayInput.textContent = "0";
    displayOperation.textContent = " ";
    firstNum = null;
    secondNum = null;
    operator = null;
    result = null;
}

function add(firstNum,secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum,secondNum) {
    return firstNum - (secondNum);
}

function multiply(firstNum,secondNum) {
    return firstNum * (secondNum);
}

function divide(firstNum,secondNum) {
    return firstNum / (secondNum);
}

function operate(firstNum,operator,secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (operator) {
        case "+":
            return add(firstNum,secondNum);    
            break;
        case "-":
            return subtract(firstNum,secondNum);
            break;
        case "*":
            return multiply(firstNum,secondNum);
            break;
        case "/":
            return divide(firstNum,secondNum);
            break;
    }
}

function calculator() {  
   
buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        displayInput.textContent = button.innerText;
        if(operator == null) {
            firstNum = button.innerText;
        } else {
            nextNum = button.innerText;
            console.log(firstNum + " " + nextNum);
        }
    });
   });

   operatorBtn.forEach(opr => {
    opr.addEventListener("click", () => {
        operator = opr.innerText.toString();
    });
    });

    equalBtn.addEventListener("click", () => {
        if(firstNum != null && nextNum != null) {     
            result = operate(firstNum,operator,nextNum);
            displayInput.textContent = Math.round(result * 100) / 100;
            firstNum = Math.round(result * 100) / 100;
            
        }
    });

clearBtn.addEventListener("click", clear);

}

calculator();