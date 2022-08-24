'use strict';

const inputs = [...document.querySelectorAll('input')];

const camelToUpper = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .toUpperCase()
  .trim();

const camelToTitle = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase())
  .trim();

inputs.forEach(input => {
  const label = document.createElement('label');
  const getId = input.getAttribute('id');

  label.classList.add('field-label');
  label.setAttribute('for', getId);
  label.textContent = camelToUpper(input.getAttribute('name'));

  input.setAttribute('placeholder', camelToTitle(input.getAttribute('name')));
  input.insertAdjacentElement('beforebegin', label);
});
