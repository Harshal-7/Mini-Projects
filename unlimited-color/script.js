const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

let myInterval;
const start = function(){
    if(!myInterval){
        myInterval = setInterval(changeBG,1000);    
    }
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stop = function(){
    clearInterval(myInterval);
    myInterval = null;
}

document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);