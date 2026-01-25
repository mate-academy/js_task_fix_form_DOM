'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';

  el.placeholder = el.name.charAt(0).toUpperCase() + el.name.slice(1);
  label.htmlFor = el.id;
  label.textContent = el.name.toUpperCase();

  const field = el.closest('.field');

  field.insertBefore(label, el);
});
