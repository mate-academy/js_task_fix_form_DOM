'use strict';

const forms = document.querySelectorAll('form');
let idCounter = 1;

forms.forEach((form) => {
  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {
    const labelElement = document.createElement('label');

    labelElement.className = 'field-label';

    if (!input.id) {
      input.id = `input-id-${idCounter++}`;
    }
    labelElement.setAttribute('for', input.id);

    if (!input.name) {
      continue;
    }

    if (input.name) {
      labelElement.textContent = humanizeText(input.name);

      if (!input.hasAttribute('placeholder') || input.placeholder === '') {
        const placeholderValue = humanizeText(
          input.name.charAt(0).toUpperCase() + input.name.slice(1),
        );

        input.setAttribute('placeholder', placeholderValue);
      }
    }

    if (
      input.id &&
      input.parentElement.querySelector('label[for="' + input.id + '"]')
    ) {
      continue;
    }

    input.parentElement.appendChild(labelElement);
  }
});

function humanizeText(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}
