import{ add } from './mathUtils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function handleAddClick () {
    const value1 = addInput1.valueAsNumber;
    const value2 = addInput2.valueAsNumber;
    
    const sum = add(value1, value2);
    
    addResults.textContent = sum;
}
