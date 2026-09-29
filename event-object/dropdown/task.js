const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__list a'));
const value = document.querySelector('.dropdown__value');

function clickList () {
    list.classList.toggle('dropdown__list_active')
};
value.addEventListener('click', clickList);
 
function clickItems (event) {
    event.preventDefault();
    let text = event.target.textContent;
    value.textContent = '';
    value.textContent = text;
    list.classList.remove('dropdown__list_active');
}

items.forEach(item => {
    item.addEventListener('click', clickItems)
});
