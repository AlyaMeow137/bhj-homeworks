let time = document.getElementById('timer');
let numTime = parseInt(time.textContent);
function change () {
    if (numTime === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timer);
        return;
    }
    numTime--;
    time.textContent = numTime;
}
let timer = setInterval(change, 1000);