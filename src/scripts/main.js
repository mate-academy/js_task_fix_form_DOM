'use strict';

const inputs = document.querySelectorAll('form input');

function camelCaseToFormat(str) {
  const words = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/(?=[A-Z])/);

  return words.map((word) => word.toUpperCase()).join(' ');
}

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');
  const capitalizeName = camelCaseToFormat(inputName);

  input.placeholder =
    inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

  input.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', id);

  label.textContent = capitalizeName;
});
