'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const label = document.createElement('label');
  const inputName = el.getAttribute('name').toLowerCase();
  const placeholderName = inputName[0].toUpperCase()
  + inputName.substring(1);

  el.setAttribute('placeholder', placeholderName);

  el.before(label);
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = el.getAttribute('name');
});
