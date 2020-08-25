'use strict';

const fieldContainers = document.querySelectorAll('.field');

for (const field of [...fieldContainers]) {
  const thisFieldInput = field.querySelector('input');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = thisFieldInput.name;
  label.htmlFor = thisFieldInput.id;

  field.prepend(label);

  thisFieldInput.placeholder = (thisFieldInput.name)
    .split('')
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    })
    .join('');
}
