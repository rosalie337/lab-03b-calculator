// import DOM functions and grab DOM elements
import { handleAddClick, handleSubClick, handleMultiClick, handleDivClick} from './clickHandlers.js';

const addButton = document.getElementById('add-button');
const subtractionButton = document.getElementById('subtraction-button');
const multiplyButton = document.getElementById('multiply-button');
const divisionButton = document.getElementById('division-button');

// initialize state
// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subtractionButton.addEventListener('click', handleSubClick);
multiplyButton.addEventListener('click', handleMultiClick);
divisionButton.addEventListener('click', handleDivClick);