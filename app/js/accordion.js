'use strict'

let accordionBtns = document.querySelectorAll('.main-nav__link');
let section = document.querySelector('.main-section');
let navigation = document.querySelector('.main-nav');
let title = document.querySelector('.main-section__title');


for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        if(!(this.classList.contains('accordion-active'))) {
            for (let i = 0; i < accordionBtns.length; i++) {
                accordionBtns[i].classList.remove('accordion-active');
            } 
            this.classList.add('accordion-active');
            navigation.classList.add('accordion-active-desk');
            title.classList.add('accordion-title');
            section.classList.add('accordion-section');
    
        } else {
            this.classList.remove('accordion-active');
        }
    })
}


