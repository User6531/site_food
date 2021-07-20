'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModalWindow} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const OpenModalTimer = setTimeout( ()=> openModalWindow('.modal', OpenModalTimer), 200000);

    tabs({
        tabsSelector: '.tabheader__item',
        tabsContentSelector: '.tabcontent',
        tabsParentSelector: '.tabheader__items',
        classActive: '.tabheader__item_active'
    });
    modal('[data-modal]', '.modal', OpenModalTimer);
    calc();
    timer('2021-07-15 13:00:00');
    cards();
    forms(OpenModalTimer);
    slider({
        sliderSelector: '.offer__slider',
        sliderWrapperSelector: '.offer__slider-wrapper',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slidesSelector: '.offer__slide',
        sliderBodySelector: '.offer__slider-body',
        totalSlidesSelector: '#total',
        currentSlideSelector: '#current'
    });
});