'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.map(el => {
  el.insertAdjacentHTML('beforebegin', `<label class ='field-label' for ='${
    el.id}'>${el.name}</label>`);

  el.placeholder = `${el.name}`.charAt(0).toUpperCase() + `${
    el.name}`.slice(1);
});
