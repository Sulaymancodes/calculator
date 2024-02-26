const calculatorScreen = document.querySelector('.cal-screen');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('.equal-btn');
const buttons = document.querySelectorAll('.btns');
const clearBtn = document.querySelector('.ac-del');
const deleteBtn = document.querySelector('.del');

let firstValue = 0;
let secondValue = 0;
let operator = 0;

function add(firstValue,secondValue){
    return calculatorScreen.textContent= firstValue + secondValue;
}
function subtract(firstValue,secondValue){
    return calculatorScreen.textContent= firstValue - secondValue;
}
function multiply(firstValue,secondValue){
    return calculatorScreen.textContent= firstValue * secondValue;
}
function divide(firstValue,secondValue){
    return calculatorScreen.textContent= firstValue / secondValue;
}

function operate(firstValue,secondValue,operator){
    if(operator === '+'){
        add(firstValue,secondValue)
    }
    else if(operator === '-'){
        subtract(firstValue,secondValue)
    }
    else if(operator === '×'){
        multiply(firstValue,secondValue)
    }
    else if(operator === '÷'){
        divide(firstValue,secondValue)
    }
}


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        let btnValue = button.value;
        if(firstValue !== 0 && secondValue !== 0){
            calculatorScreen.textContent = '';
            firstValue = 0;
            secondValue = 0;
        }
        if (btnValue === '.' && calculatorScreen.textContent.includes('.')) {
            return; // Exit the function early if "." is already present
        }
        if(calculatorScreen.textContent === '0'){
            calculatorScreen.textContent = btnValue
        }
        else{
            calculatorScreen.textContent += btnValue;
        }
    })
})

operatorBtns.forEach(function(opeBtn){
    opeBtn.addEventListener('click', () =>{
        operator = opeBtn.value;
        firstValue = Number(calculatorScreen.textContent)
        calculatorScreen.textContent = '';
    })
})

equalBtn.addEventListener('click', () =>{
    secondValue = Number(calculatorScreen.textContent);
    operate(firstValue,secondValue,operator); 
    
});

clearBtn.addEventListener('click',() => {
    firstValue = 0;
    secondValue = 0;
    calculatorScreen.textContent = '0';
})

deleteBtn.addEventListener('click',() =>{
    let calValue = calculatorScreen.textContent;
    if(calValue === '0'){
        calValue = '0'
    }
    else{
        let newCalValue = calValue.slice(0,-1)
        calculatorScreen.textContent = newCalValue;
    }
   
})
