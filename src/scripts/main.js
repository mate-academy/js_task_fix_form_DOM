'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);

  const capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = capitalized;

  input.setAttribute('placeholder', capitalized);
  input.parentNode.append(label);
});
