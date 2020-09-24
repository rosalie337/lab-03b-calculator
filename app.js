// import functions and grab DOM elements
const addInput1 =document.getElementById('add-input-1')
const addInput2 =document.getElementById('add-input-2')
const addButton =document.getElementById('add-button')
const addResults =document.getElementById('add-results')

// initialize state
// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    
    console.log(value1, value2);
    
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    
    console.log(typeof value1AsNumber, typeof value2AsNumber);
    
    const sum = value1AsNumber + value2AsNumber;
    
    console.log(sum);
    
    addResults.textContent = sum;
});

const subtractionInput1 =document.getElementById('subtraction-input-1')
const subtractionInput2 =document.getElementById('subtraction-input-2')
const subtractionButton =document.getElementById('subtraction-button')
const subtractionResults =document.getElementById('subtraction-results')

subtractionButton.addEventListener('click', () => {

    const subValue1 = subtractionInput1.value;
    const subValue2 = subtractionInput2.value;

    console.log(subValue1, subValue2);

    const sub1AsNumber = Number(subValue1);
    const sub2AsNumber = Number(subValue2);

    console.log(typeof sub1AsNumber, typeof sub2AsNumber);

    const subSum = sub1AsNumber - sub2AsNumber;

    console.log(subSum);

    subtractionResults.textContent = subSum;

});