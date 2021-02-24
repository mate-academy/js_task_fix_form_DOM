'use strict';

const listInput = document.querySelectorAll('input');

const capitalize = (text) => {
  const splitByCapitalLatter = text.split('').map(
    char => char !== char.toUpperCase() ? char : ' ' + char
  ).join('');

  return splitByCapitalLatter.slice(0, 1).toUpperCase()
    + splitByCapitalLatter.slice(1);
};

listInput.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);
  input.before(label);
});
