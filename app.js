// import DOM functions and grab DOM elements
import { handleAddClick, handleSubClick, handleMultiClick } from './clickHandlers.js';

const addButton = document.getElementById('add-button');

// initialize state
// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);


const subtractionButton = document.getElementById('subtraction-button')

subtractionButton.addEventListener('click', handleSubClick);

const multiplyButton = document.getElementById('multiply-button')

multiplyButton.addEventListener('click', handleMultiClick);
    

// const divisionInput1 = document.getElementById('division-input-1')
// const divisionInput2 = document.getElementById('division-input-2')
// const divisionButton = document.getElementById('division-button')
// const divisionResults = document.getElementById('division-results')

// divisionButton.addEventListener('click', () => {

//     const divValue1 = divisionInput1.value;
//     const divValue2 = divisionInput2.value;
    
//     console.log(divValue1, divValue2);

//     const div1AsNumber = Number(divValue1);
//     const div2AsNumber = Number(divValue2);

//     console.log(typeof div1AsNumber, typeof div2AsNumber);

//     const divSum = div1AsNumber / div2AsNumber;
    
//     console.log(divSum);

//     divisionResults.textContent = divSum;
// })