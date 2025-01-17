'use strict';

function formInputs() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = input.name;

      const inputName = input.name.split('').map((el) => {
        return el.toLowerCase();
      });

      inputName[0] = inputName[0].toUpperCase();
      input.placeholder = inputName.join('');
      input.parentElement.insertBefore(label, input);
    });
  });
}
formInputs();
