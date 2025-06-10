'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    const id = input.id;
    const name = input.name;

    if (!id || !name) {
      return;
    }

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', id);
    label.textContent = name.replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase());

    input.parentNode.insertBefore(label, input);

    if (!input.placeholder) {
      input.placeholder = label.textContent;
    }
  });
});
