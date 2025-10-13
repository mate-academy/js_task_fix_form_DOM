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
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-_]/g, '')
      .toLowerCase();

    input.id = `${idSafe}-input`;
  }

  input.placeholder = labelText;

  const existingLabel = document.querySelector(
    `label[for="${CSS.escape(input.id)}"]`,
  );

  if (existingLabel) {
    existingLabel.classList.add('field-label');
    existingLabel.textContent = labelText;

    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  if (input.parentElement) {
    input.parentElement.insertBefore(label, input);
  }
});
