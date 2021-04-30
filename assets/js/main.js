const navToggle = document.querySelector('#nav-toggle');
const navBurger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

var flex = document.createElement('flex');

function navTransition () {
    if(navBurger.classList.contains('nav-burger-open')){
        navBurger.classList.remove('nav-burger-open');
        navBurger.classList.add('nav-burger-close');

        body.classList.add('scroll-hidden');
        navMenu.style.display = 'flex';
    }else{
        navBurger.classList.remove('nav-burger-close');
        navBurger.classList.add('nav-burger-open');

        body.classList.remove('scroll-hidden');
        navMenu.style.display = 'none';
    }
}

navToggle.addEventListener('click', navTransition);