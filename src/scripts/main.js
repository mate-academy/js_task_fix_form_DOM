'use strict';

const inputs = [...document.body.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatingName(input.name);
  input.after(label);
  input.placeholder = formatingName(input.name);
});

function formatingName(inputName) {
  const result = inputName
    .split('')
    .map(item => (item === item.toUpperCase()) ? ' ' + item : item)
    .join('');

  return result.replace(inputName[0], inputName[0].toUpperCase());
}
