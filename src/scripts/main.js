'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const resultInputs = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = resultInputs;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = resultInputs;
  label.setAttribute = ('for', input.id);
  input.before(label);

  if (input.name.includes('Name')) {
    input.placeholder = input.placeholder.replace(/Name/g, ' Name');
    label.textContent = label.textContent.replace(/Name/g, ' Name');
  }
}
