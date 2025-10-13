'use strict';

// write code here
const inputs = document.querySelectorAll('form input[name]');

inputs.forEach((input) => {
  if (input.type === 'submit') {
    return;
  }

  const nameValue = input.name?.trim();

  if (!nameValue) {
    return;
  }

  const displayName = nameValue.replace(/[-_]+/g, ' ');

  const labelText = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  if (!input.id) {
    const idSafe = nameValue
      .replace(/[^a-zA-Z0-9-_]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    input.id = `${idSafe}-input`;
  }

  if (document.querySelector(`label[for = "${input.id}"]`)) {
    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  if (!input.placeholder) {
    input.placeholder = labelText;
  }

  if (input.parentElement) {
    input.parentElement.insertBefore(label, input);
  }
});
