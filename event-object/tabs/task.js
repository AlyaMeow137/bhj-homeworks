const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

function clickTab () {
    tabs.forEach((item, index) => {
        item.classList.toggle('tab_active');
        contents[index].classList.toggle('tab__content_active'); 
    })
}

tabs.forEach(item => {
    item.addEventListener('click', clickTab)
})
