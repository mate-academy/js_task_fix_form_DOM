'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('form .field input');

  function splitWords(inputName) {
    return inputName.replace(/([A-Z])/g, ' $1').trim();
  }

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const labelText = splitWords(input.name);

    label.textContent = input.name.charAt(0).toUpperCase() + labelText.slice(1);

    input.placeholder = input.name.charAt(0).toUpperCase() + labelText.slice(1);

    input.parentNode.insertBefore(label, input);
  });
});
