'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  let placeholderName = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] >= 'a' && input.name[i] <= 'z') {
      placeholderName += input.name[i];
    } else {
      placeholderName += ' ' + input.name[i].toLowerCase();
    }
  }

  input.placeholder = placeholderName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholderName;

  input.before(label);
}
