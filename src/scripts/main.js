'use strict';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(inputName) {
  let capitalizedInputName = capitalize(inputName);

  return capitalizedInputName.split(/(?=[A-Z])/).join(' ');
}

document.querySelectorAll('input.field-text').forEach((input) => {
  const inputName = input.getAttribute('name');

  if (!inputName) {
    return;
  }

  const formattedName = formatName(inputName);

  const label = document.createElement('label');

  label.className = 'field-label';

  if (!input.id) {
    input.id = `${inputName}-${Math.random().toString(36).slice(2, 11)}`;
  }

  label.htmlFor = input.id;

  label.textContent = formattedName.toUpperCase();

  input.placeholder = `Enter your ${formattedName.toLowerCase()}`;

  input.parentNode.insertBefore(label, input);
});
