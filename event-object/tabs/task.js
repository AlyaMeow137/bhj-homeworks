const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

 tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }
        item.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
    })
 })