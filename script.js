const calculatorScreen = document.querySelector('.cal-screen');
const equalBtn = document.querySelector('.equal-btn');
const buttons = document.querySelectorAll('.btns');
let firstValue = 0;
let secondValue = 0;
let operator = ''

function add(firstValue,secondValue){
    return firstValue + secondValue;
}
function subtract(firstValue,secondValue){
    return firstValue - secondValue;
}
function multiply(firstValue,secondValue){
    return firstValue * secondValue;
}
function divide(firstValue,secondValue){
    return firstValue / secondValue;
}

function operate(firstValue,secondValue,operator){
    if(operator === '+'){
        add(firstValue,secondValue)
    }
    else if(operator === '-'){
        subtract(firstValue,secondValue)
    }
    else if(operator === '*'){
        multiply(firstValue,secondValue)
    }
    else if(operator === '/'){
        divide(firstValue,secondValue)
    }
}


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        let btnValue = button.value;
        calculatorScreen.textContent += btnValue;
    })
})