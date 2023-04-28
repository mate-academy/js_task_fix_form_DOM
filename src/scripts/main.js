'use strict';

const inputElements = document.querySelectorAll('.field-text');

const valuePlaceholder = (value) => {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
};

inputElements.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.textContent = input.name;
  label.htmlFor = input.id;
  input.placeholder = valuePlaceholder(input.name);

  input.before(label);
});
