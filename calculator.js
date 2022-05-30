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
        case 'plus':
            return add(x,y);
            break;
        case 'minus':
            return substract(x,y);
            break;
        case 'multiply':
            return multiply(x,y);
        case 'divide':
            return divide(x,y);
        default:
            break;
    }
}

let leftNumber = 0;
let operator = '';

function StoreNumber() {
    leftNumber = parseInt(event.target.text);
}

function OperatorListener() {
    if(operator !== ''){
        operator = event.target.text;
        
    }
}

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



function print() {
    displayField.text = leftNumber;
}