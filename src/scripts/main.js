'use strict';

function fixForm() {
  const forms = document.querySelectorAll('form');

  for (const form of forms) {
    const inputs = form.querySelectorAll('input');

    for (const input of inputs) {
      const label = document.createElement('label');

      label.htmlFor = input.id;
      label.className = 'field-label';
      label.textContent = input.name[0].toUpperCase() + input.name.slice(1);
      input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
      input.parentNode.appendChild(label);
    }
  }
}

fixForm();
