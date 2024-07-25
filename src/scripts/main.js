'use strict';

const ar = document.querySelectorAll('.field');

ar.forEach((el) => {
  const label = document.createElement('label');
  const input = el.lastElementChild;

  label.className = 'field-label';
  input.setAttribute('placeholder', input.getAttribute('name'));
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');
  el.prepend(label);
});
