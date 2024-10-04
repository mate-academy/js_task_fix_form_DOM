'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.htmlFor = input.id;
      label.textContent = capitalize(input.name);

      input.placeholder = capitalize(input.name);

      input.parentNode.insertBefore(label, input);
    });
  });

  function capitalize(string) {
    if (string === 'lastName') {
      return 'Last Name';
    } else if (string === 'firstName') {
      return 'First Name';
    } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
});
