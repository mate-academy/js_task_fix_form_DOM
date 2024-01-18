'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');
  const labelName = input.getAttribute('name');
  const labelFor = input.getAttribute('id');

  label.className = 'field-label';
  label.textContent = labelName;
  label.setAttribute('for', labelFor);

  if (label.textContent.includes('Name')) {
    label.textContent = label.textContent.replace('Name', ' name');
  }

  input.after(label);

  input.placeholder = labelName
    .slice(0, 1)
    .toUpperCase() + labelName.slice(1);

  if (input.placeholder.includes('Name')) {
    input.placeholder = input.placeholder.replace('Name', ' Name');
  }
});
