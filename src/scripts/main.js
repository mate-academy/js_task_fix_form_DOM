'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  let idCounter = 1;

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const formattedName = input.name
        .replace(/[-_]/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^./, (str) => str.toUpperCase());

      input.setAttribute('placeholder', formattedName);

      if (!input.id) {
        input.id = `${input.name || 'input'}-${idCounter++}`;
      }

      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);
      label.textContent = formattedName;

      input.parentNode.insertBefore(label, input);
    });
  });
});
