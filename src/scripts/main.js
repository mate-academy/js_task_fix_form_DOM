'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const placeholderText =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = placeholderText;

  const label = document.createElement('label');

  label.classList.add(['field-label']);
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentElement.prepend(label);
}
