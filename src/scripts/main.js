'use strict';

// write code here
const inputs = document.getElementsByTagName('input');

[...inputs].forEach((input, inputIndex) => {
  if (!input.id) {
    input.id = `${input.name}-${inputIndex}`;
  }

  const label = document.createElement('label');
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
});
