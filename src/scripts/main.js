'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  // eslint-disable-next-line no-shadow
  const name = input.getAttribute('name');
  const id = input.getAttribute('id');

  if (name && id) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', id);
    label.textContent = name;

    input.placeholder = name.charAt(0).toUpperCase() + name.slice(1);
    input.parentNode.insertBefore(label, input);
  }
});
