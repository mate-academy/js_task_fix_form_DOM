'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.classList.add('field-label');

      if (input.name === 'firstName') {
        label.textContent = 'First Name';
        input.placeholder = 'First Name';
      } else if (input.name === 'lastName') {
        label.textContent = 'Last Name';
        input.placeholder = 'Last Name';
      } else {
        label.textContent = input.name;
        input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
      }

      label.setAttribute('for', input.id);

      input.parentNode.insertBefore(label, input);
    });
  });
});
