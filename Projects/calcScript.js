// class calculator{

// }
// const numberButtons = document.querySelectorAll('[dataNumber]')
// const operationButtons = document.querySelectorAll('[dataoperation]')

// const equalsButton = document.querySelector('[dataEquals]')
// const deleteButton = document.querySelector('[dataDelete]')
// const allClearButton = document.querySelector('[dataAllClear]')
// const previousOperandButton = document.querySelector('[dataPrevious]')
// const currentOperandButton = document.querySelector('[dataCurrent]')

// Calculator logic without Classes

let input = document.querySelector('[dataCurrent]');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML== '='){
            string = eval(string);
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.slice(0,-1);
            input.innerHTML = string;
        }
        else{
            string += e.target.innerHTML;
            input.innerHTML = string;
        }
    })
})