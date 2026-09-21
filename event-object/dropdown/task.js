const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const value = document.querySelector('.dropdown__value')

function clickList () {
    list.classList.add('dropdown__list_active')
};
value.addEventListener('click', clickList);

function clickItems (event) {
    let text = event.target.textContent;
    value.textContent = '';
    value.textContent = text;
    list.classList.remove('dropdown__list_active');
}
items.forEach(item => {
    item.addEventListener('click', clickItems)
});
