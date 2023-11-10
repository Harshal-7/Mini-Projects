const clock = document.getElementById('timer')

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    clock.style.textAlign = 'center';
    clock.style.fontSize = '2em';
    clock.style.paddingTop = '50px';
}, 1000);