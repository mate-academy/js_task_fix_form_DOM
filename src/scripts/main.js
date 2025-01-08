'use strict';

const arrayOfInputs = document.querySelectorAll('input');

for (const field of arrayOfInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', field.id);
  label.textContent = field.name.toUpperCase();

  field.setAttribute(
    'placeholder',
    field.name.charAt(0).toUpperCase() + field.name.slice(1).toLowerCase(),
  );

  field.before(label);
}
