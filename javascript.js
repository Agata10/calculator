let firstNum = null;
let secondNum = null;
let operator = null;
let result = null;

const buttonsNum = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const displayInput = document.querySelector(".display-input");
const displayR = document.querySelector(".display-result");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");


function clear() {
    displayInput.textContent = "";
    displayR.textContent = "";
    firstNum = null;
    secondNum = null;
    operator = null;
    result = null;
}

function displayResult(firstNum,operator,secondNum){
    displayR.textContent = firstNum + operator + secondNum + " =";
}

function resetInput() {
    displayInput.textContent = "";
}

function round(number) {
   return Math.round(number * 100) / 100;
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

        if(operator == null){
            displayInput.textContent += button.innerText;
            firstNum = Number(displayInput.textContent);
        } else {
            displayInput.textContent += button.innerText;
            secondNum = Number(displayInput.textContent);
        }

        console.log(firstNum + " " + secondNum);
    });
   });

   operatorBtn.forEach(opr => {
    opr.addEventListener("click", () => {
        operator = opr.innerText.toString();
        displayR.textContent = "";
        displayInput.textContent = "";
    });
    });

    equalBtn.addEventListener("click", () => {
        displayInput.textContent = ""; 

        if(firstNum != null && secondNum != null) {    
            result = operate(firstNum,operator,secondNum);
            displayInput.textContent = round(result);
            displayResult(firstNum,operator,secondNum);
            firstNum = round(result);
        }
    });

clearBtn.addEventListener("click", clear);

}

calculator();