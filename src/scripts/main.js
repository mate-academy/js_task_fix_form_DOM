'use strict';

const inputElements = document.querySelectorAll('.field-text');

const textFormat = (value) => {
  return value[0].toUpperCase() + value.slice(1).split('N').join(' N');
};

inputElements.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.textContent = textFormat(input.name);
  label.htmlFor = input.id;
  input.placeholder = textFormat(input.name);

  input.before(label);
});
