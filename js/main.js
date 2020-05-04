/* Calculator's actions */

const Calculator = document.querySelector('.container');
const Display = Calculator.querySelector('.display');
const Keys = Calculator.querySelector('.calculator-keys');

// Add Event Listeners to the button tags
Keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        
        // Get the specific button
        let key = e.target;

        //Get the button data-action attribute
        let action = key.dataset.action;

        // Get the text contents of the button
        let keyContent = key.textContent;

        //Get currently displayed number
        let displayContent = Display.textContent;

        
        // Replace the default display number with new numbers
        if (!action){
            if (displayContent === '0'){
                Display.textContent = keyContent;
            }
            else {
                Display.textContent = displayContent + keyContent;
            }
        }

        // Add calculation keys to the display  
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            Display.textContent = displayContent + ' ' + keyContent + ' ';
        }

        // For decimal
        if (action === 'decimal'){
            Display.textContent = displayContent + keyContent;
        }

        // For AC 
        if (action === 'clear'){
            Display.textContent = '0';
        }

        // For DEL 
        if (action === 'del'){
            if (displayContent.length === 1){
                Display.textContent = '0';
            }
            else {
                Display.textContent = displayContent.slice(0, displayContent.length -1);
            }
        }

        // For equal
        if (action === 'equal'){
            Display.textContent = eval(displayContent);
        }
    }
});
