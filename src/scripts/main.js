'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  if (input.name === 'firstName' || input.name === 'lastName') {
    const formattedName =
      input.name === 'firstName' ? 'First Name' : 'Last Name';

    label.textContent = formattedName;
    input.placeholder = formattedName;
  } else {
    const formattedName = capitalizeFirstLetter(input.name);

    label.textContent = formattedName;
    input.placeholder = formattedName;
  }

  input.parentElement.insertBefore(label, input);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
