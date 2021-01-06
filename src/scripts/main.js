'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const separatedName = input.name.split(/(?=[A-Z])/);

  label.textContent = separatedName.join(' ').toUpperCase();

  const placeholderText = [];

  for (const word of separatedName) {
    placeholderText.push(word.toLowerCase().charAt(0).toUpperCase()
      + word.toLowerCase().slice(1));
  }

  input.before(label);

  input.setAttribute(
    'placeholder',
    placeholderText.join(' ')
  );
}
