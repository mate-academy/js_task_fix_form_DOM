'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input, ind) => {
  let placeholderName = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      placeholderName += ' ' + input.name[i].toLowerCase();
      continue;
    }
    placeholderName += input.name[i];
  }

  input.placeholder = placeholderName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholderName;
  input.parentElement.append(label);
});
