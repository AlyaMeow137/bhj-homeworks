const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const value = document.querySelector('.dropdown__value')

function clickList () {
    list.classList.add('dropdown__list_active')
};
list.addEventListener('click', clickList);

function clickItems () {
    list.classList.remove('dropdown__list_active');
    let text = this.textContent;
    value.textContent = text;
}
items.forEach(item => {
    item.addEventListener('click', clickItems)
});
