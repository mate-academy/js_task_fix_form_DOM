'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();

  input.before(label);

  input.setAttribute(
    'placeholder',
    input.name.toLowerCase().charAt(0).toUpperCase()
      + input.name.toLowerCase().slice(1)
  );
}
