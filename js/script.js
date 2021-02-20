'use strict';
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import modal, {openModal} from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';
import cards from './modules/cards'

document.addEventListener('DOMContentLoaded', () => {
    let modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000)
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    calc()
    forms('form', modalTimerID)
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    })
    timer('.timer', '2021-02-21')
    cards()
    modal('[data-modal]', '.modal', modalTimerID)
});

