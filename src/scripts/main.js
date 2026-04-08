'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  input.parentElement.prepend(label);

  const placeholderName = input.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  const placeholderText = (
    placeholderName[0].toUpperCase() + placeholderName.slice(1)
  );

  label.textContent = placeholderText.toUpperCase();

  input.placeholder = placeholderText;
}
