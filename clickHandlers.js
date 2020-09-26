import{ add, subtract, multiply, division } from './mathUtils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function handleAddClick () {
    const value1 = addInput1.valueAsNumber;
    const value2 = addInput2.valueAsNumber;
    
    const sum = add(value1, value2);
    
    addResults.textContent = sum;
}

const subtractionInput1 = document.getElementById('subtraction-input-1');
const subtractionInput2 = document.getElementById('subtraction-input-2');
const subtractionResults = document.getElementById('subtraction-results');

export function handleSubClick () {
    const subValue1 = subtractionInput1.valueAsNumber;
    const subValue2 = subtractionInput2.valueAsNumber;

    const subSum = subtract(subValue1 ,subValue2);

    subtractionResults.textContent = subSum;
}

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResults = document.getElementById('multiply-results');

export function handleMultiClick () {
    const multiValue1 = multiplyInput1.valueAsNumber;
    const multiValue2 = multiplyInput2.valueAsNumber;

    const multiSum = multiply(multiValue1, multiValue2);

    multiplyResults.textContent = multiSum;
}

const divisionInput1 = document.getElementById('division-input-1');
const divisionInput2 = document.getElementById('division-input-2');
const divisionResults = document.getElementById('division-results');

export function handleDivClick () {
    const divValue1 = divisionInput1.valueAsNumber;
    const divValue2 = divisionInput2.valueAsNumber;

    const divSum = (divValue1, divValue2);

    divisionResults.textContent = divSum;
}