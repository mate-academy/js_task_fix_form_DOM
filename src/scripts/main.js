'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;
    input.insertAdjacentElement('beforebegin', label);

    input.setAttribute(
      'placeholder',
      input.name[0].toUpperCase() + input.name.slice(1),
    );
  });
});
