const submit = document.querySelector('#btn')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')

submit.addEventListener('click', (e) => {
    e.preventDefault();

    // Reset the styling of BMI weight guide elements to default
    resetGuideStyle(p2);
    resetGuideStyle(p3);
    resetGuideStyle(p4);
    resetGuideStyle(p5);

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#p-1')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Height`
        result.style.color = 'red';
        result.style.fontWeight = '600';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight`
        result.style.color = 'red';
        result.style.fontWeight = '600';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is : <span>${bmi}</span>`
        result.style.color = 'black';
        result.style.fontWeight = '400';

        if (bmi < 18.5) {
            p2.innerHTML = `<span> Underweight </span> = less than 18.5`
            updateGuideStyle(p2, 'red');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            p3.innerHTML = `<span>Normal weight</span> = 18.5 &minus; 24.9`
            updateGuideStyle(p3, 'blue');
        } else if (bmi >= 25 && bmi <= 29.9) {
            p4.innerHTML = `<span> Overweight </span> = 25 &minus; 29.9`
            updateGuideStyle(p4, 'orange');
        } else if (bmi >= 30) {
            p5.innerHTML = `<span> Obesity </span> = BMI of 30 or greater`
            updateGuideStyle(p5, 'red');
        }
    }
})

// Function to reset the styling of BMI weight guide element
function resetGuideStyle(element) {
    element.innerHTML = ''; // Reset the content
}

// Function to update the styling of BMI weight guide element
function updateGuideStyle(element, color) {
    const span = document.createElement('span');
    span.textContent = element.textContent; // Preserve the content
    span.style.color = color;
    span.style.fontWeight = '600';
    span.style.fontSize = '1.2em';
    element.innerHTML = ''; // Reset the content
    element.appendChild(span);
}
