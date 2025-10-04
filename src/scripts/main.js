'use strict';

document.querySelectorAll('form').forEach((f) => {
  f.querySelectorAll('input').forEach((input, index) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.textContent = input.name;

    if (!input.id) {
      input.id = `input-${input.name || index}`;
    }

    label.setAttribute('for', input.id);
    input.before(label);

    const inputName = input.name || '';
    const placeholder = inputName
      ? inputName[0].toUpperCase() + inputName.slice(1)
      : '';

    input.setAttribute('placeholder', placeholder);
  });
});
