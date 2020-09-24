// import functions and grab DOM elements
const addInput1 =document.getElementById('add-input-1')
const addInput2 =document.getElementById('add-input-2')
const addButton =document.getElementById('add-button')
const addResults =document.getElementById('add-results')

const subtractionInput1 =document.getElementById('subtraction-input-1')
const subtractionInput2 =document.getElementById('subtraction-input-2')
const subtractionButton =document.getElementById('subtraction-button')
const subtractionResults =document.getElementById('subtraction-results')

// initialize state
// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
 
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    console.log(value1, value2)

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(typeof value1AsNumber, typeof value2AsNumber);

    const sum = value1AsNumber + value2AsNumber;
    
    console.log(sum);

    addResults.textContent = sum;
});