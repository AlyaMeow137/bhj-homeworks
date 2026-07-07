let dead = document.getElementById('dead');
let numDead = parseInt(dead.textContent);

let lost = document.getElementById('lost');
let numLost = parseInt(lost.textContent);

let hole = Array.from(document.querySelectorAll('.hole'));

function clickHole () {
    if (this.classList.contains('hole_has-mole')) {
        if (numDead === 9) {
            alert('Победа!');
            numDead = 0;
            dead.textContent = numDead;
            numLost = 0;
            lost.textContent = numLost;
        } else {
            numDead++; 
            dead.textContent = numDead; 
        }
    } else {
        if (numLost === 4){
            alert('Поражение.');
            numLost = 0;
            lost.textContent = numLost;
            numDead = 0;
            dead.textContent = numDead;
        } else {
            numLost++; 
            lost.textContent = numLost;
        }
    }
}
for (let i = 0; i < hole.length; i++) {
    hole[i].addEventListener('click', clickHole);