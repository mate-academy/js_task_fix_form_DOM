'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  el.setAttribute('placeholder', el.getAttribute('name').toLocaleUpperCase());
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = el.name;

  el.parentElement.prepend(label);
});

// write code here
