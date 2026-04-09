'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

for (const input of inputs) {
  const label = document.createElement('label');

  if (input.hasAttribute('id') && input.id !== '') {
    label.setAttribute('for', input.id);
  }

  if (input.hasAttribute('name') && input.name !== '') {
    label.textContent = input.name;

    input.setAttribute(
      'placeholder',
      input.name[0].toUpperCase() + input.name.slice(1),
    );
  }

  label.className = 'field-label';
}
