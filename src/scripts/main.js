'use strict';

const inputMap = [...document.querySelectorAll('.field-text')];

inputMap.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', capitalized);

  input.parentElement.insertBefore(label, input);
});
