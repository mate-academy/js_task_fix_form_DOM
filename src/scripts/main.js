'use strict';

document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input, index) => {
    const parentField = input.closest('.field');
    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = `${input.name || 'input'}-${index}`;
    }

    label.setAttribute('for', input.id);

    const labelText = input.name
      ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
      : `Field ${index + 1}`;

    label.textContent = labelText;

    input.placeholder = `${labelText}`;

    parentField.insertBefore(label, input);
  });
});
