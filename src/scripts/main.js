'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(node => {
  const labelName = node.getAttribute('name');
  const labelFor = node.getAttribute('id');
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.textContent = labelName;
  inputLabel.setAttribute('for', labelFor);

  node.after(inputLabel);

  node.placeholder = labelName
    .slice(0, 1)
    .toUpperCase() + labelName.slice(1);
});
