'use strict';
const tablet = document.querySelectorAll('.field');

Array.from(tablet).forEach((table) => {
  const input = table.querySelector('input');
  const nameCell = document.createElement('label');
  const inputId = input.id;
  const inputName = input.name;

  const labelText =
    inputName === 'firstName'
      ? 'First Name'
      : inputName === 'lastName'
        ? 'Last Name'
        : inputName.charAt(0).toUpperCase() + inputName.slice(1);

  nameCell.textContent = labelText;
  nameCell.setAttribute('for', inputId);
  input.setAttribute('placeholder', labelText);
  nameCell.classList.add('field-label');

  input.insertAdjacentElement('beforebegin', nameCell);
});
