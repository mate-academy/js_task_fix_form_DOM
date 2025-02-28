'use strict';

document.querySelectorAll('form input').forEach((inputElement) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (inputElement.id) {
    label.setAttribute('for', inputElement.id);
  }

  label.textContent =
    inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1);

  inputElement.placeholder = label.textContent;

  inputElement.parentNode.insertBefore(label, inputElement);
});
