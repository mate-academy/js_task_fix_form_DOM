'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    if (input.name === 'firstName') {
      label.textContent = 'First Name';
      input.placeholder = 'First Name';
    } else if (input.name === 'lastName') {
      label.textContent = 'Last Name';
      input.placeholder = 'Last Name';
    } else {
      const formattedName = capitalizeFirstLetter(input.name);

      label.textContent = formattedName;
      input.placeholder = formattedName;
    }

    input.parentElement.insertBefore(label, input);
  });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
