'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = input.name.toUpperCase();

  input.before(label);
  input.setAttribute('placeholder', capitalizePlaceholder(input.name));
});

function capitalizePlaceholder(placeholder) {
  return `${placeholder[0].toUpperCase()}${placeholder.slice(1)}`;
};
