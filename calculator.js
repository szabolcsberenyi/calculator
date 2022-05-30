const oneButton = document.querySelector('#a1');
const twoButton = document.querySelector('#a2');
const threeButton = document.querySelector('#a3');
const fourButton = document.querySelector('#a4');
const fiveButton = document.querySelector('#a5');
const sixButton = document.querySelector('#a6');
const sevenButton = document.querySelector('#a7');
const eightButton = document.querySelector('#a8');
const nineButton = document.querySelector('#a9');
const nullButton = document.querySelector('#a0');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const clearButton = document.querySelector('#AC');
const equalsButton = document.querySelector('#equal');


const displayField = document.querySelector('#screen');


function add(x,y){
    return x+y;
}

function substract(x,y) {
    return x-y;
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y;
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x,y);
            break;
        case '-':
            return substract(x,y);
            break;
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            break;
    }
}

let rightNumber = null;
let leftNumber = null;

let operator = null;

function NumberListener() {
    
    if (rightNumber === null) {
        rightNumber = parseInt(event.target.innerText);
    }else{

        rightNumber *= 10;
        rightNumber += parseInt(event.target.innerText);
    }
    console.log(rightNumber);
    print();
}

function OperatorListener() {
    operator = event.target.innerText;
    if(!leftNumber){
        leftNumber = rightNumber;
        rightNumber = null;
    }else{
        EqualListener();
        operator = event.target.innerText;

    }
    
}

function EqualListener(){
    if(leftNumber && rightNumber && operator){
        console.log('Solution: '+ operate(operator, leftNumber, rightNumber));
        displayField.value = operate(operator, leftNumber, rightNumber);
        leftNumber = operate(operator, leftNumber, rightNumber);
        rightNumber = null;
        operator = null;
    }
}



function print() {
    displayField.value = rightNumber;
}


oneButton.addEventListener('click', NumberListener);
plusButton.addEventListener('click', OperatorListener);
equalsButton.addEventListener('click', EqualListener);