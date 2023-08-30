'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const formattedName = input.name.charAt(0).toUpperCase()
  + input.name.slice(1).replace(/([A-Z])/g, ' $1').trim();

  label.textContent = formattedName;
  input.setAttribute('placeholder', formattedName);

  input.parentNode.insertBefore(label, input);
});
