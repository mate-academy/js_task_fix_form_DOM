'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');
  let counter = 0;

  for (const input of inputs) {
    const temp = (input.name || '').trim();
    const id = input.id || (temp ? temp.toLowerCase() : `input-${counter}`);

    input.id = id;

    if (document.querySelector(`label[for="${input.id}"]`)) {
      continue;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    if (temp) {
      input.placeholder = temp.charAt(0).toUpperCase() + temp.slice(1);
    }

    input.parentElement.insertBefore(label, input);
  }
});
