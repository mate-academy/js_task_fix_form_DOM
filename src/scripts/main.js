'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  let idCounter = 1;

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = `input-${idCounter}`
      idCounter++;
    }

    label.setAttribute('for', input.id);

    label.textContent = `${input.name || 'Field'}`.toUpperCase();

    input.setAttribute('placeholder', `${input.name || 'Enter value'}`);

    const container = input.parentElement;

    container.insertBefore(label, input);
  })
})

