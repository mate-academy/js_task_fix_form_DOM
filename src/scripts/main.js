'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((inp) => {
  const label = document.createElement('label');

  inp.name = inp.name.split(/(?=[A-Z])/).join(' ');

  label.className = 'field-label';
  label.setAttribute('for', inp.id);
  label.innerText = inp.name;

  inp.insertAdjacentElement('beforebegin', label);

  inp.setAttribute('placeholder', inp.name.slice(0, 1).toUpperCase()
    + inp.name.slice(1));
});
