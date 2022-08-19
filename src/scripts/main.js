'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(param) {
  return param.slice(0, 1).toUpperCase()
    + param.slice(1).split(/(?=[A-Z])/g).join(' ');
}

inputs.forEach(el => {
  el.insertAdjacentHTML('beforebegin',
    `<label 
    class='field-label' 
    for="${el.id}">
    ${el.name}
  </label>`);
  el.placeholder = capitalize(el.name);
});
