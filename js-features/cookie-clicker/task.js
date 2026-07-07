let counter = document.getElementById('clicker__counter');
let numClick = parseInt(counter.textContent);
let img = document.getElementById('cookie');

function changeDown () {
    numClick++;
    img.style.width = '250px';
    counter.textContent = numClick;
}
function changeUp () {
    img.style.width = '200px';
}
img.addEventListener('mousedown', changeDown);
img.addEventListener('mouseup', changeUp);