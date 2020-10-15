'use strict';

const inputCovers = document.querySelectorAll('.field');

for (const inputCover of inputCovers) {
  const input = inputCover.querySelector('input');
  const inputName = input.name.replace(/([A-Z])/g, ' $1');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputName;
  label.htmlFor = input.id;
  inputCover.append(label);

  let placeholder = inputName.toLowerCase();

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
  input.placeholder = placeholder;
}
