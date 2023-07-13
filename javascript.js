let firstNum = null;
let secondNum = null;
let currentOperator = null;
let result = null;
let equalClick = false;


const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const displayInput = document.querySelector(".display-input");
const displayH = document.querySelector(".display-result");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");


function clear() {
    displayInput.textContent = "";
    displayH.textContent = "";
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    result = null;
    equalClick = false;
}

function displayHistory(firstNum,operator,secondNum){
    if(operator == "*"){
        operator = "×";
    }
    if(operator == "/") {
        operator = "÷";
    } 
    if(secondNum == null){
        secondNum = "";
    }
    displayH.textContent = firstNum + operator + secondNum;
}

function display(number){
    displayInput.textContent += number;
}

function resetDisplay(){
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

function evaluate() {

    result = operate(firstNum,currentOperator,secondNum);
    displayHistory(firstNum,currentOperator,secondNum + "=");
    resetDisplay();
    display(round(result));
    firstNum = round(result);
    secondNum = null;
    currentOperator = null;
}

function calculator() {  
    
    numberBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            if(equalBtn == true) { /* clean screen after clicking eqaul button for first number */
                resetDisplay();
            }

            display(btn.innerText);
           
            if(currentOperator == null){
            firstNum = displayInput.textContent;
            } else {
            secondNum = displayInput.textContent;
            }  
        });
    });

    operatorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            
            if(firstNum != null){ 
                if(secondNum != null) { /*evaulate when the operator is pressed*/
                evaluate();
                }                        /*clean screen for next number before equal button */
                currentOperator = btn.innerText.toString();  
                displayHistory(firstNum,currentOperator,secondNum);
                resetDisplay(); 
            }             

        });
    });

    equalBtn.addEventListener("click", () => {

        if(firstNum != null && currentOperator != null && secondNum != null){
            evaluate();
        }
    })
    
    clearBtn.addEventListener("click", clear);

}

calculator();