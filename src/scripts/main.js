'use strict';

if (typeof document !== 'undefined') {

  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    if (!input.id) {
      input.id = `input-${input.name}`;
    }

    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);
    label.textContent = text;

    input.parentNode.insertBefore(label, input);

    input.placeholder = text;
  });
}


