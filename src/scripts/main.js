'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const createLabel = document.createElement('label');

  createLabel.className = 'field-label';
  createLabel.htmlFor = input.id;
  createLabel.textContent = input.name.replace('N', ' N');

  const nameWithBigLatter = input.name.charAt(0).toUpperCase()
    + input.name.slice(1).replace('N', ' N');

  input.placeholder = nameWithBigLatter;
  // input.parentElement.append(createLabel);
  input.parentElement.append(createLabel);
});
