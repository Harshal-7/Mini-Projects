const submit = document.querySelector('#btn')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')

submit.addEventListener('click',(e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#p-1')
    // const display = document.querySelector('#p-2')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid Height`
        result.style.color = 'red';
        result.style.fontWeight = '600';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid Weight`
        result.style.color = 'red';
        result.style.fontWeight = '600';
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is : <span>${bmi}</span>`
        result.style.color = 'black';
        result.style.fontWeight = '400';

        if(bmi < 18.5){
            p2.innerHTML = `<span> Underweight </span> = less than 18.5`
            const p2Span = document.querySelector('#p2 span');
            p2Span.style.color = 'red';
            p2Span.style.fontWeight = '600';
            p2Span.style.fontSize = '1.2em'
        }else if(bmi >= 18.5 && bmi <= 24.9){
            p3.innerHTML = `<span>Normal weight</span> = 18.5 &minus; 24.9`
            const p3Span = document.querySelector('#p3 span');
            p3Span.style.color = 'blue';
            p3Span.style.fontWeight = '600';
            p3Span.style.fontSize = '1.2em'
        }else if(bmi >= 25 && bmi <= 29.9){
            p4.innerHTML = `<span> Overweight </span> = 25 &minus; 29.9`
            const p4Span = document.querySelector('#p4 span');
            p4Span.style.color = 'orange';
            p4Span.style.fontWeight = '600';
            p4Span.style.fontSize = '1.2em'
        }else if(bmi >= 30){
            p5.innerHTML = `<span> Obesity </span> = BMI of 30 or greater`
            const p5Span = document.querySelector('#p5 span');
            p5Span.style.color = 'red';
            p5Span.style.fontWeight = '600';
            p5Span.style.fontSize = '1.2em'
        }

    }

})