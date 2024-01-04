'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const labelName = input.getAttribute('name');
  const labelFor = input.getAttribute('id');

  const label = document.createElement('lable');

  label.className = 'field-label';
  label.textContent = labelName;
  label.setAttribute('for', labelFor);

  input.after(label);

  input.placeholder = labelName
    .slice(0, 1)
    .toUpperCase() + labelName.slice(1);
});
