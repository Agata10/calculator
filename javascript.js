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
const backspaceBtn = document.getElementById("backspace");
const equalBtn = document.querySelector(".equal");
const pointBtn = document.getElementById("point-button");


function clear() {
    displayInput.textContent = "0";
    displayH.textContent = "";
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    result = null;
    equalClick = false;
}

function deleteDigit() {
       displayInput.textContent = displayInput.textContent
       .toString()
       .slice(0,-1)

       if(currentOperator == null){         /*attach new value to numbers*/
        firstNum = displayInput.textContent;
        } else {
        secondNum = displayInput.textContent;
        } 
}

function addPoint() {
    displayInput.textContent = displayInput.textContent + ".";
}

function displayHistory(firstNum,operator,secondNum){
    if(operator == "*"){
        operator = "×";
    }
    if(operator == "/"){
        operator = "÷";
    } 
    if(secondNum == null){
        secondNum = "";
    }
    displayH.textContent = firstNum + operator + secondNum;
}

function display(number){
    if(displayInput.textContent == "0") {
        resetDisplay();
    }
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
        case "-":
            return subtract(firstNum,secondNum);
        case "*":
            return multiply(firstNum,secondNum);
        case "/":
            if(secondNum === 0){
                secondNum = null;
                alert("No dividing by zero!");
                return "";
            }
            return divide(firstNum,secondNum);
    }
}

function evaluate() {

    if(firstNum != null && currentOperator != null && secondNum != null){
    result = operate(firstNum,currentOperator,secondNum);
    displayHistory(firstNum,currentOperator,secondNum + "=");
    resetDisplay();
    display(round(result));
    firstNum = round(result);
    secondNum = null;
    currentOperator = null;
    }
}

function calculateUsingKeyboard() {

    window.addEventListener("keydown", function(e) {
        if(e.key >=0 && e.key < 10) {

            display(e.key);

            if(currentOperator == null){
                firstNum = displayInput.textContent;
                } else {
                secondNum = displayInput.textContent;
                } 

        } else if(e.key == "Backspace") {
            deleteDigit();

        } else if(e.key == "Escape") {
            clear();

        } else if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
 
                evaluate(); /*evaulate when the operator is pressed*/
                                      
                currentOperator = e.key;
                displayHistory(firstNum,currentOperator,secondNum);
                resetDisplay();  /*clean screen for next number before equal button */
                
        } else if(e.key === "Enter" || e.key == "=") {
            evaluate();
        }
    });
}

function calculator() {  

    displayInput.textContent = "0";
    
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

                evaluate();
                                     
                currentOperator = btn.innerText.toString();  
                displayHistory(firstNum,currentOperator,secondNum);
                resetDisplay();  /*clean screen for next number before equal button */
        });
    });

    equalBtn.addEventListener("click", evaluate);
   
    clearBtn.addEventListener("click", clear);

    backspaceBtn.addEventListener("click", deleteDigit);

    pointBtn.addEventListener("click", addPoint);
    
    calculateUsingKeyboard();

}

calculator();