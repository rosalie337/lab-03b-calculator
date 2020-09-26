// import DOM functions and grab DOM elements
import { handleAddClick, handleSubClick } from './clickHandlers.js';

const addButton = document.getElementById('add-button');

// initialize state
// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);


const subtractionButton = document.getElementById('subtraction-button')

subtractionButton.addEventListener('click', handleSubClick);

// const multiplyInput1 = document.getElementById('multiply-input-1')
// const multiplyInput2 = document.getElementById('multiply-input-2')
// const multiplyButton = document.getElementById('multiply-button')
// const multiplyResults = document.getElementById('multiply-results')


// multiplyButton.addEventListener('click', () => {
    
//     console.log ('multiplyInput1');
    
//     const multiValue1 = multiplyInput1.value;
//     const multiValue2 = multiplyInput2.value;

//     console.log(multiValue1, multiValue2);

//     const multi1AsNumber = Number(multiValue1);
//     const multi2AsNumber = Number(multiValue2);

//     console.log(typeof multi1AsNumber, typeof multi2AsNumber);

//     const multiSum = multi1AsNumber * multi2AsNumber;
    
//     console.log(multiSum);

//     multiplyResults.textContent = multiSum;
// });

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