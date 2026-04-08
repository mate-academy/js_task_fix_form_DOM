'use strict';

// write code here
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const forms = document.querySelectorAll('form');

const inputs = [];

forms.forEach(form => {
  const formInputs = form.querySelectorAll('input');

  inputs.push(...formInputs);
});

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.textContent = `${capitalize(input.getAttribute('name'))}`;

  input.setAttribute('placeholder', `${capitalize(input.getAttribute('name'))}`);
  input.parentElement.insertBefore(label, input);
}
