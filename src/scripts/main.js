'use strict';

const inputs = document.querySelectorAll('form input');

function fixForm(inputsForm) {
  inputsForm.forEach((input, index) => {
    if (!input.name) {
      return;
    }

    const lable = document.createElement('label');

    if (!input.id) {
      const safe = input.name
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^-\w]/g, '');

      input.id = input.name ? `input-${safe}` : `input-${index}`;
    }

    lable.classList.add('field-label');
    lable.setAttribute('for', input.id);

    lable.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
    input.parentNode.appendChild(lable);
    input.placeholder = lable.textContent;
  });
}

fixForm(inputs);
