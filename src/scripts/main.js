'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, index) => {
  if (!input.name || !input.name.trim()) {
    return;
  }

  const safeName = input.name.trim().replace(/\W+/g, '-');

  if (!input.id) {
    input.id = `${safeName}-${index}`;
  }

  const labelText =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = labelText;

  input.setAttribute('placeholder', labelText);

  if (input.parentElement) {
    input.parentElement.insertBefore(label, input);
  }
});
