'use strict';

document.querySelectorAll('form input').forEach((input) => {
  const inputName = input.name;

  if (!inputName) {
    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentNode.insertBefore(label, input);

  input.placeholder = label.textContent;
});
