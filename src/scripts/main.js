'use strict';

// write code here

const inputs = document.querySelectorAll('input');
const inputsElements = [...inputs];

inputsElements.forEach((input) => {
  const labelId = input.getAttribute('id');
  let labelName = input
    .getAttribute('name')
    .replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase();

  labelName = labelName.charAt(0).toUpperCase() + labelName.slice(1);

  input.setAttribute('placeholder', labelName);

  const label = document.createElement('label');

  label.textContent = labelName;
  label.className = 'field-label';
  label.setAttribute('for', labelId);
  input.parentNode.insertBefore(label, input);
});
