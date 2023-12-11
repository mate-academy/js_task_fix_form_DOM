'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(node => {
  const labelName = node.getAttribute('name');
  const inputLabel = document.createElement('label');
  const labelFor = node.getAttribute('id');

  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', labelFor);
  inputLabel.textContent = labelName;

  node.after(inputLabel);

  node.placeholder = labelName
    .slice(0, 1)
    .toUpperCase() + labelName.slice(1);
});
