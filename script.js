let numberArray = [];


function add(a,b){
    return parseFloat(a, 10) + parseFloat(b, 10);
}
function substract(a,b) {
    return parseFloat(a, 10) - parseFloat(b, 10);
}

function multiply(a,b) {
    return parseFloat(a, 10) * parseFloat(b, 10);
}
function divide(a,b) {
    return parseFloat(a, 10) / parseFloat(b, 10);
}
function remainder(a,b) {
    return parseFloat(a, 10) % parseFloat(b, 10);
}

function calculate(currentOperator) {
    if (currentOperator == "*") {
        let newValue = numberArray.reduce(multiply);
        numberArray = [];
        numberArray.push(newValue);
    } else if (currentOperator == "/") {
        let newValue = numberArray.reduce(divide);
        numberArray = [];
        if (newValue !== NaN && newValue !== Infinity)  {
            numberArray.push(newValue);
        }

    } else if (currentOperator == "+") {
        let newValue = numberArray.reduce(add);
        numberArray = [];
        numberArray.push(newValue);

    } else if (currentOperator == "-") {
        let newValue = numberArray.reduce(substract);
        numberArray = [];
        numberArray.push(newValue)

    } else if (currentOperator == "%") {
        let newValue = numberArray.reduce(remainder);
        numberArray = [];
        numberArray.push(newValue);

    } ;
}

const textBar = document.getElementById('textbar');


//Makes typing numbers possible

const numberButtons = document.querySelectorAll('[data-number]');

for (let i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click' , () => {
        if (textBar.textContent == "*") {
            textBar.textContent = "";
        } else if (textBar.textContent == "/") {
            textBar.textContent = "";
        }  else if (textBar.textContent == "+") {
            textBar.textContent = "";
        } else if (textBar.textContent == "-") {
            textBar.textContent = "";
        } else if (textBar.textContent == "%") {
            textBar.textContent = "";
        } else if (textBar.textContent == "0") {
            textBar.textContent = "";
        } else if (textBar.textContent == "00") {
            textBar.textContent = "";
        }
        else if (textBar.textContent == "NaN") {
            textBar.textContent = "";
        }
        textBar.textContent += numberButtons[i].dataset.number

    }) ; 
 }

 //clearall function

 


const operators = document.querySelectorAll('[data-operator]');
let currentOperator = "";
for (let i = 0 ; i < operators.length; i++) {
    operators[i].addEventListener('click' , (e) => {
        let currentNumber = textBar.textContent;
        numberArray.push(currentNumber);
        textBar.textContent = "";
        textBar.textContent += operators[i].dataset.operator
        
        calculate(currentOperator);
        currentOperator = e.target.dataset.operator;

    }) ; 
 }

 const clearButton = document.getElementById('clearall');

 clearButton.addEventListener('click', () => {
    textBar.textContent = "";
    numberArray = [];
    currentOperator = "";

 });

const equalButton  = document.getElementById('equals');
equalButton.addEventListener('click', () => {
    let currentNumber = textBar.textContent;
    numberArray.push(currentNumber);
    calculate(currentOperator);

    textBar.textContent = Math.round(numberArray[0]  * 10) / 10;
    ;

})

const backspace = document.getElementById('backspace')

backspace.addEventListener('click', () => {
    let valueOnDisplay = textBar.textContent;
    valueOnDisplay = valueOnDisplay.slice(0, -1);
    textBar.textContent = valueOnDisplay;
})

