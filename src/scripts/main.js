'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.setAttribute('class', 'field-label');
      label.setAttribute('for', input.id);

      const inputName = input.getAttribute('name');

      if (inputName === 'firstName' || inputName === 'lastName') {
        input.setAttribute(
          'placeholder',
          capitalize(inputName === 'lastName' ? 'last name' : 'first name'),
        );

        label.textContent = capitalize(
          inputName === 'lastName' ? 'last name' : 'first name',
        );
      } else {
        label.textContent = capitalize(inputName);
        input.setAttribute('placeholder', capitalize(inputName));
      }

      const parentInput = input.parentNode;

      parentInput.insertBefore(label, input.nextSibling);
    });
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
