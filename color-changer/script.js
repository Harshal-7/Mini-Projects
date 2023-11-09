const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn) => {
    console.log(btn);
    
    btn.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange';
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = 'rgb(0, 255, 0)';
        }
    })
})