const openMenu = document.querySelector('.nav__menu-open');
const closeMenu = document.querySelector('.nav__menu-close');
const listWrapper = document.querySelector('.list-wrapper');
const navListItemsText = document.querySelectorAll('.nav__list-items-text');

openMenu.addEventListener('click', e => {
    listWrapper.classList.add('display');
    openMenu.classList.add('hidden');
});

closeMenu.addEventListener('click', e => {
    listWrapper.classList.remove('display');
    openMenu.classList.remove('hidden');
});

navListItemsText.forEach(item => {
    item.addEventListener('click', e => {
        listWrapper.classList.remove('display');
        openMenu.classList.remove('hidden');

        if (!item.classList.contains('lastOneActivated')) {
            navListItemsText.forEach(item => {
                item.classList.remove('lastOneActivated');
            });

            item.classList.add('lastOneActivated');
        }
    });
})

