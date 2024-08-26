'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.getAttribute('id'));

    const nameOfInput = input.getAttribute('name') || '';
    const capitalizedName =
      nameOfInput.charAt(0).toUpperCase() + nameOfInput.slice(1);

    label.textContent = capitalizedName;
    input.setAttribute('placeholder', capitalizedName);

    input.parentNode.insertBefore(label, input);
  });
});
