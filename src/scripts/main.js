'use strict';

document.querySelectorAll('input').forEach((input) => {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');

  label.classList.add('field-label');
  label.textContent = inputName;
  label.setAttribute('for', input.getAttribute('id'));

  input.setAttribute(
    'placeholder',
    inputName.charAt(0).toUpperCase() + inputName.slice(1),
  );
  input.insertAdjacentElement('beforebegin', label);
});
