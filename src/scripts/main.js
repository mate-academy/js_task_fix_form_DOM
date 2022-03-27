'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  const cutText = input.name.replace(/([A-Z])/g, ' $1');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = cutText.charAt(0).toUpperCase() + cutText.slice(1);

  input.parentElement.append(label);

  input.placeholder = cutText.charAt(0).toUpperCase() + cutText.slice(1);
});
