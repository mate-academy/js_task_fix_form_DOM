'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const parentInput = input.parentElement;

  label.classList.add('field-label');

  const nameInput = input.name;
  const id = input.id;

  label.htmlFor = id;
  label.textContent = nameInput;

  parentInput.append(label);
}

for (const input of inputs) {
  const placeholder = input.name;

  input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
}
