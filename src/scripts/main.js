'use strict';

// element.setAttribute(name, value)
const arrayOfFields = document.querySelectorAll('.field');

for (const field of arrayOfFields) {
  const label = document.createElement('label');
  const input = field.lastElementChild;
  const nameField = input
    .getAttribute('name')
    .split(/(?=[A-Z])/)
    .join(' ');

  label.className = 'field-label';

  input.setAttribute(
    'placeholder',
    nameField.charAt(0).toUpperCase() + nameField.slice(1),
  );
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = nameField.charAt(0).toUpperCase() + nameField.slice(1);
  field.prepend(label);
}
