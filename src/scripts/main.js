'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = el.id;
  label.textContent = el.name;

  el.parentElement.prepend(label);
  el.placeholder = el.name.toUpperCase();
});
