'use strict';
const inputs = document.querySelectorAll('form input');

const capitalize = (str) => {
  if (str.length > 0 && str !== null) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  if (input.name.length > 0 && input.name !== null) {
    if (input.name === 'firstName') {
      input.name = 'first Name'
    }
    if (input.name === 'lastName') {
      input.name = 'last  Name'
    }

    label.textContent = `${capitalize(input.name)}`;
    input.placeholder = capitalize(input.name);
  }

  input.parentNode.insertBefore(label, input);
});
