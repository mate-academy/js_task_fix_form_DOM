'use strict';

function formatName(nameValue) {
  if (nameValue.includes('-')) {
    const parts = nameValue.split('-');

    return parts[1][0].toUpperCase() + parts[1].slice(1) + ' ' + parts[0];
  } else {
    return nameValue[0].toUpperCase() + nameValue.slice(1);
  }
}

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatName(input.name);
  input.placeholder = formatName(input.name);

  input.parentElement.insertBefore(label, input);
});
