'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.map(el => {
  const splitedName = el.name.replace(/([a-z](?=[A-Z]))/g, '$1 ');

  el.insertAdjacentHTML('beforebegin', `<label class ='field-label' for ='${
    el.id}'>${splitedName.toUpperCase()}</label>`);

  el.placeholder = `${splitedName}`.charAt(0).toUpperCase() + `${
    splitedName}`.slice(1);
});
