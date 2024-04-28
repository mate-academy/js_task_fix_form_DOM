'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.setAttribute('class', 'field-label');
      label.setAttribute('for', input.id);
      label.textContent = capitalize(input.getAttribute('name'));

      input.setAttribute('placeholder', capitalize(input.getAttribute('name')));

      const parentInput = input.parentNode;

      parentInput.insertBefore(label, input.nextSibling);
    });
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
