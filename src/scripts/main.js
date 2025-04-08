'use strict';

document.querySelectorAll('form').forEach((form) => {
  form.querySelectorAll('input').forEach((input) => {
    if (!input.id || !input.name) {
      return;
    }

    const formatedText = input.name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    const existingLabel = form.querySelector(`label[for="${input.id}"]`);

    if (!existingLabel) {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = formatedText;

      input.parentNode.appendChild(label);
    }

    if (!input.placeholder) {
      input.placeholder = formatedText;
    }
  });
});
