'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const labels = document.createElement('label');
  labels.classList.add('field-label');

  if(!input.id) {
    input.id = input.name;
  }
  labels.setAttribute('for', input.id);
  labels.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.placeholder = labels.textContent;

  input.parentNode.insertBefore(labels, input);
});
