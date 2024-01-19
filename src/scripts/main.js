'use strict';

const inputsList = document.querySelectorAll('.field-text');

inputsList.forEach(element => {
  element.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for=${element.id}>${element.name}</label>`);
});

inputsList.forEach(element => {
  element.setAttribute('placeholder',
    `${element.name[0].toUpperCase() + element.name.slice(1)}`);
});
