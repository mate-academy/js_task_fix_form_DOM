'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(elem => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elem.id);
  label.textContent = elem.name;
  elem.setAttribute('placeholder', elem.name.toUpperCase());

  elem.before(label);
});
