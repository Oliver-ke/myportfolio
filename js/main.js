// select Dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//Set initial state of the menu

let shoWMenu = false
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!shoWMenu) {
        //opening the menu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //loops through the menu items or nav items
        navItems.forEach(item => item.classList.add('show'));

        //set the menu state
        shoWMenu = true;

    }

    else {
        //closing the menu
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        //loops through the menu items or nav items
        navItems.forEach(item => item.classList.remove('show'));

        //set the menu state
        shoWMenu = false;
        
    }
}