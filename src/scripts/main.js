'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.textContent = input.name.replace(/([A-Z])/g, ' $1');
  label.htmlFor = input.id;
  label.className = 'field-label';

  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  input.parentElement.append(label);
});
