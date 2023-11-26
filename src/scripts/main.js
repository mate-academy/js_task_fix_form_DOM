'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', input.id);

    const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = labelText;

    input.setAttribute('placeholder', labelText);

    input.parentElement.appendChild(label);
  });
});
