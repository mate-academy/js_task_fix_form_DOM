'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);
  label.textContent = el.name;

  el.parentElement.append(label);
});

inputs.forEach((el) => {
  return el.setAttribute(
    'placeholder',
    el.name.charAt(0).toUpperCase() + el.name.slice(1),
  );
});
