'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const label = document.createElement('label');
  const inputName = el.getAttribute('name').split(/(?=[A-Z])/);
  let placeholderName = '';

  if (inputName.length === 1) {
    placeholderName = inputName[0][0].toUpperCase()
    + el.getAttribute('name').substring(1);
    label.textContent = el.getAttribute('name');
  } else {
    placeholderName = inputName[0][0].toUpperCase() + inputName[0].substring(1)
    + ' ' + inputName[1][0].toUpperCase() + inputName[1].substring(1);

    label.textContent = inputName[0].toUpperCase()
    + ' ' + inputName[1].toUpperCase();
  }

  el.before(label);
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));
  el.setAttribute('placeholder', placeholderName);
});
