'use strict';

// write code here
const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name.toUpperCase();

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.prepend(label);
  }
}
