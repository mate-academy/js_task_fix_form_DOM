'use strict';

document.querySelectorAll('input').forEach((input) => {
  const label = document.createElement('label');
  let inputName = input.getAttribute('name');

  switch (inputName) {
    case 'firstName':
      inputName = inputName.slice(0, 5) + ' ' + inputName.slice(5);
      break;
    case 'lastName':
      inputName = inputName.slice(0, 4) + ' ' + inputName.slice(4);
      break;
    default:
      break;
  }

  label.classList.add('field-label');
  label.textContent = inputName;
  label.setAttribute('for', input.getAttribute('id'));

  input.setAttribute(
    'placeholder',
    inputName.charAt(0).toUpperCase() + inputName.slice(1),
  );
  input.insertAdjacentElement('beforebegin', label);
});
